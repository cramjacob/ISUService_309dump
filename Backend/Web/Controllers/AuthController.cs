using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Data;
using Web.Models;

namespace Web.Controllers
{
    [Produces("application/json")]
    [EnableCors("CorsPolicy")]
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly DatabaseContext _context;

        public AuthController(DatabaseContext context)
        {
            // Dependency injection
            _context = context;
        }

        [HttpPost("register")]
        public User Register([FromBody] ApiUser user)
        {
            // If user with email already exists, don't create a new one
            if (_context.user.Any(x => x.Email == user.Email))
            {
                return null;
            }

            // Generate random 64bit salt
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[64]);

            // Append the password to the salt
            byte[] pwdByteArray = Encoding.UTF8.GetBytes(user.Password);
            IEnumerable<byte> saltedPassword = pwdByteArray.Concat(salt);


            // Hash the salted password using sha256
            SHA256Managed hasher = new SHA256Managed();
            byte[] hashedPassword = hasher.ComputeHash(saltedPassword.ToArray());

            // Create DB user
            User dbUser = new User()
            {
                Email = user.Email,
                Name = user.Name,
                PasswordHash = hashedPassword,
                PasswordSalt = salt
            };

            // Try putting new user in DB
            try
            {
                _context.Add(dbUser);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }

            return _context.user.Where(x => x.Email == user.Email).FirstOrDefault();
        }

        [HttpPost("login")]
        public User Login([FromBody] ApiUser user)
        {
            // Get user with same email in DB
            User dbUser = _context.user.Where(x => x.Email == user.Email).First();

            // If no user with that email exists in the database, return false
            if (dbUser == null)
            {
                return null;
            }

            // Get salt from database
            byte[] salt = dbUser.PasswordSalt;

            // Append the incoming password to the db salt
            byte[] pwdByteArray = Encoding.UTF8.GetBytes(user.Password);
            IEnumerable<byte> saltedPassword = pwdByteArray.Concat(salt);


            // Hash the salted password
            SHA256Managed hasher = new SHA256Managed();
            byte[] hashedPassword = hasher.ComputeHash(saltedPassword.ToArray());

            // If the passwords match, return true
            if (hashedPassword.SequenceEqual(dbUser.PasswordHash))
            {
                return _context.user.Where(x => x.Email == user.Email).FirstOrDefault();
            }

            // Otherwise, return false
            return null;
        }
    }
}