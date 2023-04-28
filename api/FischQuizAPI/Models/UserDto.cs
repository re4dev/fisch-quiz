namespace FischQuizAPI.Models
{
    public class UserDto
    {
        public string Username { get; set; } = string.Empty;
        public string Mail { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string? PasswordRepeat { get; set; } = string.Empty;
    }
}
