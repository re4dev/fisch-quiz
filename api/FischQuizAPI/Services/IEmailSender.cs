using FischQuizAPI.Models;

namespace FischQuizAPI
{
    public interface IEmailSender
    {
        Task SendEmailAsync(Email mail);
    }
}
