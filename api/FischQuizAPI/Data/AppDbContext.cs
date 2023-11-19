using FischQuizAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FischQuizAPI.Data
{
    public class AppDbContext : DbContext
    {

        public DbSet<Fish> Fishes { get; set; }
        public DbSet<Characteristic> Characteristics { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Fish>()
                .HasMany<Characteristic>(e => e.Characteristics)
                .WithOne(e => e.Fish)
                .HasForeignKey(e => e.FishId)
                .IsRequired(false);
        }

    }
}
