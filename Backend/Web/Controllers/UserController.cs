﻿using System;
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
        public User Get(int id)
        {
            var dbUser = _context.user.Find(id);
            if (dbUser == null)
            {
                return null;
            }
            return dbUser;
        }

        /// <summary>
        /// Creates a new user in the database
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
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
        public void Put(int id, [FromBody]User user)
        {
        }

        /// <summary>
        /// Deletes a user from the database
        /// </summary>
        /// <param name="id">Id of the user you want to delete</param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var user = _context.user.Find(id);
            _context.user.Remove(user);
        }

        [HttpPost("addbiography/{id}")]
        public void AddBio(int id, [FromBody]string bio)
        {
            var dbUser = _context.user.Find(id);
            if (dbUser == null)
            {
                return;
            }
            dbUser.Bio = bio;
            _context.SaveChanges();
            return;
        }
    }
}
