using FischQuizAPI.Data;
using FischQuizAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace FischQuizAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        public UserController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> Get()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(UserDto request)
        {
            try
            {
                using (_context)
                {
                    if (!await _context.Users.AnyAsync(x => x.Username == request.Username))
                    {
                        return BadRequest("User not found!");
                    }

                    var requestedUser = await _context.Users.FirstOrDefaultAsync(x => x.Username == request.Username);
                    bool rightPassword = false;

                    using (var hmc = new HMACSHA512(requestedUser.UserPasswordSalt))
                    {
                        var computedHash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes(request.Password));

                        rightPassword = computedHash.SequenceEqual(requestedUser.UserPasswordHash);

                    }

                    if (rightPassword == false)
                    {
                        return BadRequest("Wrong password!");
                    }

                    List<Claim> claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, requestedUser.Username),
                        new Claim(ClaimTypes.NameIdentifier, requestedUser.UserId.ToString())
                    };


                    var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

                    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

                    var token = new JwtSecurityToken(claims: claims, expires: DateTime.Now.AddMinutes(60), signingCredentials: creds);

                    var jwt = new JwtSecurityTokenHandler().WriteToken(token);

                    LoginUser loginUser = new()
                    {
                        name = requestedUser.Username,
                        id = requestedUser.UserId,
                        accessToken = jwt,
                        email = "test@test.de"
                    };

                    return Ok(loginUser);

                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Register")]
        [Produces("application/json")]
        public async Task<IActionResult> Register(UserDto request)
        {
            try
            {
                using (_context)
                {
                    if (await _context.Users.AnyAsync(x => x.Username == request.Username))
                    {
                        return BadRequest("Username already in use!");
                    }

                    if (request.Password == null || request.Password == "")
                    {
                        return BadRequest("Bad password!");
                    }

                    if (request.Password != request.PasswordRepeat)
                    {
                        return BadRequest("Password is not the same!");
                    }

                    User newUser = new();

                    using (var hmc = new HMACSHA512())
                    {
                        newUser.UserPasswordSalt = hmc.Key;
                        newUser.UserPasswordHash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes(request.Password));
                    }

                    newUser.Username = request.Username;
                    newUser.UserMail = request.Mail;

                    await _context.Users.AddAsync(newUser);

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (Exception e)
                    {
                        throw new Exception(e.Message);
                    }

                    return Ok();

                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
