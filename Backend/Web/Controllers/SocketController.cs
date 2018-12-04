using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Data;

namespace Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Socket")]
    public class SocketController : Controller
    {
        private readonly DatabaseContext _context;

        public SocketController(DatabaseContext context)
        {
            _context = context;
        }


    }
}