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
    [EnableCors("CorsPolicy")]
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

        [HttpGet("by-user/{userID}")]
        public List<Offering> GetOfferingsByUser(int userID)
        {
            var offerings = _context.offering.Where(x => x.UserID == userID).ToList();
            return offerings;

        }

        /// <summary>
        /// Creates a new Offering in the database
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public Offering Post([FromBody] OfferingDTO offering)
        {
            var postObject = new Offering()
            {
                Title = offering.Title,
                Description = offering.Description,
                Location = offering.Location,
                PostDate = offering.PostDate,
                ImageURL = offering.ImageURL,
                UserID = offering.UserID 
            };
            try
            {
                _context.offering.Add(postObject);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return _context.offering.Last();
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
            var dbOffering = _context.offering.Find(id);
            if (dbOffering == null)
            {
                return;
            }
            _context.offering.Remove(dbOffering);
            _context.SaveChanges();
        }

        [HttpGet("get-requests-by-user/{id}")]
        public List<RequestDTO> GetRequestsByUser(int id)
        {
            var j = _context.request.Where(x => x.RequesteeID == id).ToList();
            return j;
        }


        [HttpPost("request")]
        public RequestDTO RequestDTO([FromBody] RequestDTO request)
        {
            var dbUserRequester = _context.user.Find(request.RequesterID);
            var dbUserRequestee = _context.user.Find(request.RequesteeID);
            var offering = _context.offering.Find(request.OfferingID);
            if (dbUserRequestee == null || dbUserRequester == null || offering == null)
            {
                return null;
            }
            try
            {
                var dbRequest = new RequestDTO()
                {
                    RequesteeID = request.RequesteeID,
                    RequesterID = request.RequesterID,
                    OfferingID = request.OfferingID,
                    Timestamp = request.Timestamp
                };
                _context.request.Add(dbRequest);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return _context.request.Last();
        }
    }
}
