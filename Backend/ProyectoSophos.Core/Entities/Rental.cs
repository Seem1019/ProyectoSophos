namespace ProyectoSophos.Core.Entities
{
    public partial class Rental
    {
        public string IdRent { get; set; } = null!;

        public string? IdUserRental { get; set; }

        public string? IdVideoGamesRental { get; set; }

        public DateTime? RentalDate { get; set; }

        public DateTime? RentalEndDate { get; set; }

        public virtual User? IdUserRentalNavigation { get; set; }

        public virtual VideoGame? IdVideoGamesRentalNavigation { get; set; }
    }
}
