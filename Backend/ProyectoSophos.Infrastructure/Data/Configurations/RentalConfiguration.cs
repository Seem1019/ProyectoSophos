using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProyectoSophos.Core.Entities;

namespace ProyectoSophos.Infrastructure.Data.Configurations
{
    public class RentalConfiguration : IEntityTypeConfiguration<Rental>
    {
        public void Configure(EntityTypeBuilder<Rental> entity)
        {
            entity.HasKey(e => e.IdRent).HasName("PK__rental_d__0F4BF3B0E8DAAD5F");

            entity.ToTable("rental_data");

            entity.Property(e => e.IdRent)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("id_rent");
            entity.Property(e => e.IdUserRental)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("id_user_rental");
            entity.Property(e => e.IdVideoGamesRental)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("id_video_games_rental");
            entity.Property(e => e.RentalEndDate)
                .HasColumnType("date")
                .HasColumnName("rental_end_date");
            entity.Property(e => e.RentalDate)
                .HasColumnType("date")
                .HasColumnName("retal_date");

            entity.HasOne(d => d.IdUserRentalNavigation).WithMany(p => p.RentalData)
                .HasForeignKey(d => d.IdUserRental)
                .HasConstraintName("fk_usesr_rental");

            entity.HasOne(d => d.IdVideoGamesRentalNavigation).WithMany(p => p.RentalData)
                .HasForeignKey(d => d.IdVideoGamesRental)
                .HasConstraintName("fk_video_games_rental");
        }
    }
}
