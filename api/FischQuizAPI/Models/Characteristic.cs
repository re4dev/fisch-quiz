namespace FischQuizAPI.Models
{
    public class Characteristic
    {
        public int CharacteristicId { get; set; }
        public string Description { get; set; }

        //navigation props
        public int? FishId { get; set; }
        public Fish? Fish { get; set; }

    }
}
