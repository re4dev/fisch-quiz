using FischQuizAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FischQuizAPI.Data
{
    public class AppDbContext : DbContext
    {

        public DbSet<Fish> Fishes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserFishFavorite> Favorites { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserFishFavorite>()
                .HasKey(uf => new { uf.UserId, uf.FishId });
        }

    }
}
