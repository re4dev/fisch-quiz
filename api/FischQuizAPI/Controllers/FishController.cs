using FischQuizAPI.Data;
using FischQuizAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FischQuizAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FishController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        public FishController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

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

    }
}
