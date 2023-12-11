using System.Net.Mail;
using System.Net;
using System.Configuration;
using FischQuizAPI.Models;

namespace FischQuizAPI
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _config;

        public EmailSender(IConfiguration configuration)
        {
            _config = configuration;
        }

        public Task SendEmailAsync(Email mail)
        {
            var login = _config["Mail:smtpMail"];
            var pw = _config["Mail:smtpPw"];

            var client = new SmtpClient("smtp.ionos.de", 587)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(login, pw)
            };

            return client.SendMailAsync(new MailMessage(from: mail.MailAdress, to: login, subject: mail.Subject, body: mail.Body));
        }
    }
}
