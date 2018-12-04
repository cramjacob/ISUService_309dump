using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Data;

namespace Web.Controllers
{
    [Route("api/chat")]
    public class ChatController : Controller
    {
        private readonly DatabaseContext _context;

        public ChatController(DatabaseContext context)
        {
            _context = context;
        }


    }
}