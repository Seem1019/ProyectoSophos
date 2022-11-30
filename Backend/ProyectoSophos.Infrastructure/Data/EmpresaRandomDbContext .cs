using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Entities;
using System.Reflection;

namespace ProyectoSophos.Infrastructure.Data
{
    public partial class EmpresaRandomDbContext : DbContext
    {
        public EmpresaRandomDbContext()
        {
        }

        public EmpresaRandomDbContext(DbContextOptions<EmpresaRandomDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Price> PriceData { get; set; }

        public virtual DbSet<Rental> RentalData { get; set; }

        public virtual DbSet<User> UsersData { get; set; }

        public virtual DbSet<VideoGame> VideoGameData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
