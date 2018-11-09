using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Web.Data;

namespace Web.Models
{
    // This model is sent from Angular
    public class RequestDTO
    {
        public int ID { get; set; }

        public int RequesteeID { get; set; }

        public int RequesterID { get; set; }
        
        public int OfferingID { get; set; }
        
        public DateTime Timestamp { get; set; }
    }
}
