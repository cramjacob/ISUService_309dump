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
    public class OfferingDTO
    {        
        public string Title { get; set; }

        public string Description { get; set; }
        
        public string Image { get; set; }
        
        public DateTime PostDate { get; set; }
        
        public string Location { get; set; }
        
        public int UserID { get; set; }
    }
}
