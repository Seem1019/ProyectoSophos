using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProyectoSophos.Core.Interfaces;
using ProyectoSophos.Infrastructure.Data;
using ProyectoSophos.Infrastructure.Repositories;

namespace ProyectoSophos.Infrastructure.Extentions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDbContexts(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<EmpresaRandomDbContext>(options =>
               options.UseSqlServer(configuration.GetConnectionString("DefaultTenant"))
           );

            return services;
        }



        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IPriceRepository, PriceRepository>();
            services.AddTransient<IRentalRepository, RentRepository>();
            services.AddTransient<IVideoGameRepository, VideoGameRepository>();


            return services;
        }

    }
}
