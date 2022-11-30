using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProyectoSophos.Core.Entities;

namespace ProyectoSophos.Infrastructure.Data.Configurations
{
    public class VideoGameConfiguration : IEntityTypeConfiguration<VideoGame>
    {
        public void Configure(EntityTypeBuilder<VideoGame> entity)
        {
            entity.HasKey(e => e.IdGame).HasName("PK__video_ga__0E819B2C2A86159C");

            entity.ToTable("video_game_data");

            entity.Property(e => e.IdGame)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("id_game");
            entity.Property(e => e.Brand)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("brand");
            entity.Property(e => e.CoverPage)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("cover_page");
            entity.Property(e => e.Director)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("director");
            entity.Property(e => e.MainCharacter)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("main_character");
            entity.Property(e => e.NameGame)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name_game");
            entity.Property(e => e.Platforms)
                .HasMaxLength(12)
                .IsUnicode(false)
                .HasColumnName("platforms");
            entity.Property(e => e.Producer)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("producer");
            entity.Property(e => e.ReleaseDate)
                .HasColumnType("date")
                .HasColumnName("release_date");
        }
    }
}
