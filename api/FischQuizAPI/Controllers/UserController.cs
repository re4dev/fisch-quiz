using FischQuizAPI.Data;
using FischQuizAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FischQuizAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        public UserController(AppDbContext context) => _context = context;

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

                    if (requestedUser.Password != request.Password)
                    {
                        return BadRequest("Wrong password!");
                    }

                    return Ok(requestedUser.UserId);

                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(UserDto request)
        {
            try
            {
                using (_context)
                {
                    if (await _context.Users.AnyAsync(x => x.Username == request.Username))
                    {
                        return BadRequest("Username already in use!");
                    }

                    User newUser = new();

                    newUser.Username = request.Username;
                    newUser.Password = request.Password;

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
