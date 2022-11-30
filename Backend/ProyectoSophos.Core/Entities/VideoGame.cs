namespace ProyectoSophos.Core.Entities
{
    public partial class VideoGame
    {
        public string IdGame { get; set; } = null!;

        public string? NameGame { get; set; }

        public string? Director { get; set; }

        public string? MainCharacter { get; set; }

        public string? Producer { get; set; }

        public string? Brand { get; set; }

        public DateTime? ReleaseDate { get; set; }

        public string? CoverPage { get; set; }

        public string? Platforms { get; set; }

        public virtual ICollection<Price> PriceData { get; } = new List<Price>();

        public virtual ICollection<Rental> RentalData { get; } = new List<Rental>();
    }
}
