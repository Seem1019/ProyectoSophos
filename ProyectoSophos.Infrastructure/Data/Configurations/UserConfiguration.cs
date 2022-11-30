using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProyectoSophos.Core.Entities;

namespace ProyectoSophos.Infrastructure.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> entity)
        {
                
            entity.HasKey(e => e.IdUser).HasName("PK__users_da__D2D14637734108DF");

                entity.ToTable("users_data");

                entity.Property(e => e.IdUser)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("id_user");
                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("address");
                entity.Property(e => e.Age).HasColumnName("age");
                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");
                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("full_name");
                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("gender");
                entity.Property(e => e.Identification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("identification");
                entity.Property(e => e.PostalCode)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("postal_code");

        }
    }
}
