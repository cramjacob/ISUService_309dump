using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public class User
    {
        public long ID { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public long PasswordHash { get; set; }
        public long PasswordSalt { get; set; }

        // public ICollection<Offerings> { get; set; }
    }
}
