using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;
using ProyectoSophos.Infrastructure.Data;

namespace ProyectoSophos.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(EmpresaRandomDbContext context) : base(context)
        {
        }
    }
}
