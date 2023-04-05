using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FischQuizAPI.Models
{
    public class UserFishFavorite
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int FishId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        [ForeignKey("FishId")]
        public Fish Fish { get; set; }
    }
}
