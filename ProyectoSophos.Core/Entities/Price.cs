namespace ProyectoSophos.Core.Entities
{
    public partial class Price
    {
        public string IdPrice { get; set; } = null!;

        public string? IdVideoGames { get; set; }

        public decimal? Amount { get; set; }

        public decimal? PricePenalty { get; set; }

        public virtual VideoGame? IdVideoGamesNavigation { get; set; }
    }
}
