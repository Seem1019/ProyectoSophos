using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;

namespace ProyectoSophos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalsController : ControllerBase
    {
        private readonly IRentalRepository _rentalRepository;

        public RentalsController(IRentalRepository rentalRepository)
        {
            _rentalRepository = rentalRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Rental>> GetRentalsData()
        {
            var rentals = _rentalRepository.GetAll().Result;
            return Ok(rentals);
        }

        // GET: api/RentalsDatum/id
        [HttpGet("{id}")]
        public ActionResult<Rental> GetRental(string id)
        {


            return Ok(_rentalRepository.GetById(id).Result);
        }



        // POST: api/RentalsDatum
        [HttpPost]
        public ActionResult<Rental> PostRental(Rental rentalsDatum)
        {

            try
            {
                _rentalRepository.Add(rentalsDatum);
            }
            catch (DbUpdateException)
            {
                if (RentalsDatumExists(rentalsDatum.IdRent).Result)
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRental", new { id = rentalsDatum.IdRent }, rentalsDatum);
        }
        [HttpGet("most_popular_videogames")]
        public ActionResult<IEnumerable<string>> GetMostPopularVideoGame()
        {
            return Ok(_rentalRepository.GetPopularsVideoGames().Result);
        }
        [HttpGet("get_customer_freq")]
        public ActionResult<IEnumerable<string>> GetMostFreqCustomer()
        {
            return Ok(_rentalRepository.GetFrecuentClient().Result);
        }



        private async Task<bool> RentalsDatumExists(string id)
        {
            return await _rentalRepository.ExistsById(id);
        }
    }
}

