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
    public class PriceRepository : BaseRepository<Price>, IPriceRepository
    {
        public PriceRepository(EmpresaRandomDbContext context) : base(context)
        {
        }
    }
}
