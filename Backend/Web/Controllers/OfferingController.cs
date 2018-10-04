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
    public class OfferingController : Controller
    {
        private readonly DatabaseContext _context;

        public OfferingController(DatabaseContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets all offerings from the database
        /// </summary>
        /// <returns>All tuples from sys.offering</returns>
        [HttpGet]
        public IEnumerable<Offering> Get()
        {
            return _context.offering;
        }

        /// <summary>
        /// Gets a specific offering
        /// </summary>
        /// <param name="id">Id of the offering you want</param>
        /// <returns>The tuple in sys.offering with Id = parameter id</returns>
        [HttpGet("{id}")]
        public Offering Get(int id)
        {
            return _context.offering.Find(id);
        }

        /// <summary>
        /// Creates a new Offering in the database
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public Offering Post(Offering offering)
        {
            offering.UserID = 1;
            try
            {
                _context.offering.Add(offering);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return _context.offering.Find(offering.ID);
        }

        /// <summary>
        /// Edits the offering in the database
        /// </summary>
        /// <param name="id">Id of the offering to edit</param>
        /// <param name="value">Values being edited</param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        /// <summary>
        /// Deletes an offering from the database
        /// </summary>
        /// <param name="id">Id of the offering you want to delete</param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
