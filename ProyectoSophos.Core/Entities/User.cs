namespace ProyectoSophos.Core.Entities
{
    public partial class User
    {
        public string IdUser { get; set; } = null!;

        public string? FullName { get; set; }

        public string? Identification { get; set; }

        public string? Email { get; set; }

        public string? Gender { get; set; }

        public string? City { get; set; }

        public string? Address { get; set; }

        public int? Age { get; set; }

        public string? PostalCode { get; set; }

        public virtual ICollection<Rental> RentalData { get; } = new List<Rental>();
    }

}
