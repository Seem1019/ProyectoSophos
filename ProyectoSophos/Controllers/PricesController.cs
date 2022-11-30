using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;

namespace ProyectoSophos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PricesController : ControllerBase
    {
        private readonly IPriceRepository _priceRepository;

        public PricesController(IPriceRepository priceRepository)
        {
            _priceRepository = priceRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Price>> GetPricesData()
        {
            var prices = _priceRepository.GetAll().Result;
            return Ok(prices);
        }

        // GET: api/PricesDatum/id
        [HttpGet("{id}")]
        public ActionResult<Price> GetPrice(string id)
        {


            return Ok(_priceRepository.GetById(id).Result);
        }

        // PUT: api/PricesDatum/id
        [HttpPut("{id}")]
        public IActionResult PutPricesDatum(string id, Price price)
        {
            if (id != price.IdPrice)
            {
                return BadRequest();
            }
            try
            {
                _priceRepository.Update(price);

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PricesDatumExists(id).Result)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }





            return NoContent();
        }

        // POST: api/PricesDatum
        [HttpPost]
        public ActionResult<Price> PostPrice(Price pricesDatum)
        {

            try
            {
                _priceRepository.Add(pricesDatum);
            }
            catch (DbUpdateException)
            {
                if (PricesDatumExists(pricesDatum.IdPrice).Result)
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPrice", new { id = pricesDatum.IdPrice }, pricesDatum);
        }



        private async Task<bool> PricesDatumExists(string id)
        {
            return await _priceRepository.ExistsById(id);
        }
    }
}

