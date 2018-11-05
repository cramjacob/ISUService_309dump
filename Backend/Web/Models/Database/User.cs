using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public class User
    {   
        public int ID { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Bio { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }

    public class ApiUser
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}
