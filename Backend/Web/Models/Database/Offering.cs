using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data;

namespace Web.Models
{
    // This model is based directly off of the DB schema
    public class Offering
    {
        public int ID { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public byte[] Image { get; set; }

        public DateTime PostDate { get; set; }
        
        public string Location { get; set; }

        public int UserID { get; set; }

    }
}
