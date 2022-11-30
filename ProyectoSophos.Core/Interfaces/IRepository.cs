namespace ProyectoSophos.Core.Interfaces
{
    public interface IRepository<T, ID> where T : class
    {
        Task<List<T>> GetAll();
        Task<T> GetById(ID id);
        Task<bool> ExistsById(ID id);
        Task Add(T entity);
        Task Update(T entity);
        Task Delete(ID id);
    }
}
