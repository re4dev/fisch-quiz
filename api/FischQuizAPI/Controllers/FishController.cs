using FischQuizAPI.Data;
using FischQuizAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FischQuizAPI.Controllers
{
    [ApiController]
    public class FishController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IEmailSender _emailSender;
        public FishController(AppDbContext context, IConfiguration configuration, IEmailSender emailSender)
        {
            _context = context;
            _configuration = configuration;
            _emailSender = emailSender;
        }

        [Route("api/[controller]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fish>>> Get()
        {
            var fishes = await _context.Fishes.ToListAsync();


            if (fishes == null || !fishes.Any())
            {
                return NotFound();
            }

            return Ok(fishes);
        }

        [HttpGet]
        [Route("api/[controller]/{fishId}")]
        public async Task<ActionResult<IEnumerable<List<string>>>> GetCharacteristics(int fishId)
        {
            List<string> ret = new();

            var fish = await _context.Fishes. Include(f => f.Characteristics)
                .FirstOrDefaultAsync(f => f.FishId == fishId);

            if (fish == null)
            {
                return NotFound();
            }


            foreach (var characteristic in fish.Characteristics)
            {
                ret.Add(characteristic.Description);
            }


            return Ok(ret);
        }

        [HttpPost]
        [Route("api/mail/send")]
        public async Task<IActionResult> SendMail(Email mail)
        {
            try
            {
                if (mail == null)
                    return BadRequest();

                await _emailSender.SendEmailAsync(mail);
                return Ok("E-Mail erfolgreich versendet.");
            }
            catch(Exception ex)
            {
                return StatusCode(500, $"Fehler beim Senden der E-Mail: {ex.Message}");
            }
        }

        [HttpPost]
        [Route("api/mail/verify")]
        public async Task<IActionResult> CheckCaptcha(CaptchaRequest captchaRequest)
        {
            try
            {
                if (captchaRequest == null)
                    return BadRequest();

                string recaptchaSecretKey = _configuration["Captcha:SecretKey"];
                string recaptchaEndpoint = "https://www.google.com/recaptcha/api/siteverify";
                string verificationUrl = $"{recaptchaEndpoint}?secret={recaptchaSecretKey}&response={captchaRequest.Token}";

                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(verificationUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        return Ok();
                    }
                    else
                    {
                        return StatusCode(500, new { Success = false, Message = "Internal server error during reCAPTCHA verification." });
                    }
                }
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
