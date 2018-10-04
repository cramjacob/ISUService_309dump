using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Data;
using Web.Models;

namespace Web.Controllers
{
    [Produces("application/json")]
    [Route("api/offering")]
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
        [HttpGet("users")]
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
            return _context.user.Find(id);
        }

        /// <summary>
        /// Creates a new user in the database
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public void Post([FromBody]JsonObject value)
        {
        }

        /// <summary>
        /// Updates an existing user in the database
        /// </summary>
        /// <param name="id">Id of the user you want to update</param>
        /// <param name="value">Values that are being updated</param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        /// <summary>
        /// Deletes a user from the database
        /// </summary>
        /// <param name="id">Id of the user you want to delete</param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
