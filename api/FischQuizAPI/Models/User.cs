using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FischQuizAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Username { get; set; }
        public string UserMail { get; set; }

        public byte[] UserPasswordHash { get; set; }
        public byte[] UserPasswordSalt { get; set; }
    }
}