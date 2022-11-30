using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Interfaces;
using ProyectoSophos.Infrastructure.Data;

namespace ProyectoSophos.Infrastructure.Repositories
{
    public abstract class BaseRepository<T> : IRepository<T, string> where T : class
    {
        private readonly EmpresaRandomDbContext _context;
        protected readonly DbSet<T> _entities;

        public BaseRepository(EmpresaRandomDbContext context)
        {
            _context = context;
            _entities = context.Set<T>();
        }

        public async Task<List<T>> GetAll()
        {
            return await _entities.ToListAsync();
        }

        public async Task<T> GetById(string id)
        {
            return await _entities.FindAsync(id);
        }

        public async Task Add(T entity)
        {
            await _entities.AddAsync(entity);
            await SaveChangesAsync();
        }

        public async Task Update(T entity)
        {

            _entities.Update(entity);
           
            await SaveChangesAsync();
        }

        public async Task Delete(string id)
        {

            T entity = await GetById(id);
             _entities.Remove(entity);
           await SaveChangesAsync();
        }

        public async Task<bool> ExistsById(string id)
        {
            return await _entities.FindAsync(id) != null;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }
    }
}
