using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;
using ProyectoSophos.Infrastructure.Data;

namespace ProyectoSophos.Infrastructure.Repositories
{
    public class VideoGameRepository : BaseRepository<VideoGame>, IVideoGameRepository
    {
        public VideoGameRepository(EmpresaRandomDbContext context) : base(context)
        {
        }
    }
}
