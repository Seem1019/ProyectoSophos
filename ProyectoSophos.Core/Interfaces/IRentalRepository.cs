using ProyectoSophos.Core.Entities;

namespace ProyectoSophos.Core.Interfaces
{
    public interface IRentalRepository : IRepository<Rental, string>
    {
        Task<IEnumerable<string?>> GetFrecuentClient();
        Task<IEnumerable<string?>> GetPopularsVideoGames();
    }
}
