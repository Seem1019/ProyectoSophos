using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProyectoSophos.Core.Entities;

namespace ProyectoSophos.Infrastructure.Data.Configurations
{
    public class PriceConfiguration : IEntityTypeConfiguration<Price>
    {
        public void Configure(EntityTypeBuilder<Price> entity)
        {
            entity.HasKey(e => e.IdPrice).HasName("PK__price_da__D8A23E836CA62DF3");

            entity.ToTable("price_data");

            entity.Property(e => e.IdPrice)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("id_price");
            entity.Property(e => e.IdVideoGames)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("id_video_games");
            entity.Property(e => e.Amount)
                .HasColumnType("decimal(8, 2)")
                .HasColumnName("price");
            entity.Property(e => e.PricePenalty)
                .HasColumnType("decimal(6, 2)")
                .HasColumnName("Price_penalty");

            entity.HasOne(d => d.IdVideoGamesNavigation).WithMany(p => p.PriceData)
                .HasForeignKey(d => d.IdVideoGames)
                .HasConstraintName("fk_video_game");
        }
    }
}
