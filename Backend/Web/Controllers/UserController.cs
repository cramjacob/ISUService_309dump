using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Context;
using Web.Models;

namespace Web.Controllers
{
    [Route("api/user/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DbContext _context;

        public UserController(DbContext context)
        {
            _context = context;
        }

        // Get all users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users.ToList();
        }

        // Get specific user
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _context.Users.Find(id);
        }
    }
}
