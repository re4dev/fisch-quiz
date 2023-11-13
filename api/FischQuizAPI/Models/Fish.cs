using System.ComponentModel.DataAnnotations;

namespace FischQuizAPI.Models
{
    public class Fish
    {
        [Key]
        public int FishId { get; set; }
        [Required]
        public string FishName { get; set; }

        //navitgations props
        public ICollection<Characteristic> Characteristics { get; set; }
    }
}
