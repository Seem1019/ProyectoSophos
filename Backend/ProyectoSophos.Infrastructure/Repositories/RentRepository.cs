using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;
using ProyectoSophos.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoSophos.Infrastructure.Repositories
{
    public class RentRepository : BaseRepository<Rental>, IRentalRepository
    {
        public RentRepository(EmpresaRandomDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<string?>> GetFrecuentClient()
        {
            var rentalData = await _entities.ToListAsync();
            var most = rentalData.GroupBy(i => i.IdUserRental).OrderByDescending(grp => grp.Count())
            .Select(grp => grp.Key);
            return most;
        }

        public async Task<IEnumerable<string?>> GetPopularsVideoGames()
        {
            var rentalData = await _entities.ToListAsync();
            var most = rentalData.GroupBy(i => i.IdVideoGamesRental).OrderByDescending(grp => grp.Count())
            .Select(grp => grp.Key);
            return most;
        }
    }
}
