using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Web.Data;
using Web.Models;

namespace Web.Controllers
{
    [Produces("application/json")]
    [EnableCors("SiteCorsPolicy")]
    [Route("api/user")]
    public class UserController : Controller
    {
        private readonly DatabaseContext _context;

        public UserController(DatabaseContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets all users from the database
        /// </summary>
        /// <returns>All tuples from sys.user table</returns>
        [HttpGet]
        [EnableCors("SiteCorsPolicy")]
        public IEnumerable<User> Get()
        {
            return _context.user;
        }

        /// <summary>
        /// Gets a specific user from the database by ID
        /// </summary>
        /// <param name="id">The ID of the user you want</param>
        /// <returns>The tuple from sys.user that has Id = parameter Id</returns>
        [HttpGet("{id}")]
        [EnableCors("SiteCorsPolicy")]
        public User Get(int id)
        {
            return _context.user.Find(id);
        }

        /// <summary>
        /// Creates a new user in the database
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        [EnableCors("SiteCorsPolicy")]
        public User Post(User user)
        {
            try
            {
                _context.user.Add(user);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }

            return _context.user.Find(user.ID);
        }

        /// <summary>
        /// Updates an existing user in the database
        /// </summary>
        /// <param name="id">Id of the user you want to update</param>
        /// <param name="value">Values that are being updated</param>
        [HttpPut("{id}")]
        [EnableCors("SiteCorsPolicy")]
        public void Put(int id, [FromBody]string value)
        {
        }

        /// <summary>
        /// Deletes a user from the database
        /// </summary>
        /// <param name="id">Id of the user you want to delete</param>
        [HttpDelete("{id}")]
        [EnableCors("SiteCorsPolicy")]
        public void Delete(int id)
        {
        }
    }
}
