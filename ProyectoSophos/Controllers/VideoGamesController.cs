using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;

namespace ProyectoSophos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoGamesController : ControllerBase
    {
        private readonly IVideoGameRepository _videoGameRepository;

        public VideoGamesController(IVideoGameRepository videoGameRepository)
        {
            _videoGameRepository = videoGameRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<VideoGame>> GetVideoGamesData()
        {
            return Ok(_videoGameRepository.GetAll().Result) ;
        }

        // GET: api/VideoGamesDatum/id
        [HttpGet("{id}")]
        public ActionResult<VideoGame> GetVideoGame(string id)
        {


            return Ok(_videoGameRepository.GetById(id).Result);
        }

        // PUT: api/VideoGamesDatum/id
        [HttpPut("{id}")]
        public IActionResult PutVideoGamesDatum(string id, VideoGame videoGame)
        {
            if (id != videoGame.IdGame)
            {
                return BadRequest();
            }
            try
            {
                _videoGameRepository.Update(videoGame);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VideoGamesDatumExists(id).Result)
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

        // POST: api/VideoGamesDatum
        [HttpPost]
        public ActionResult<VideoGame> PostVideoGame(VideoGame videoGamesDatum)
        {

            try
            {
                _videoGameRepository.Add(videoGamesDatum);
            }
            catch (DbUpdateException)
            {
                if (VideoGamesDatumExists(videoGamesDatum.IdGame).Result)
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVideoGame", videoGamesDatum);
        }

        // DELETE: api/VideoGamesDatum/id
        [HttpDelete("{id}")]
        public IActionResult DeleteVideoGamesDatum(string id)
        {
            var videoGamesDatum = _videoGameRepository.GetById(id).Result;
            if (videoGamesDatum == null)
            {
                return NotFound();
            }

            _videoGameRepository.Delete(id);

            return NoContent();
        }

        private async Task<bool> VideoGamesDatumExists(string id)
        {
            return await _videoGameRepository.ExistsById(id);
        }
    }
}

