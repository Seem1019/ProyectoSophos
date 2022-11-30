using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoSophos.Core.Entities;
using ProyectoSophos.Core.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProyectoSophos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public  ActionResult<IEnumerable<User>> GetUsersData()
        {
            var users = _userRepository.GetAll().Result;
            return Ok(users);
        }

        // GET: api/UsersDatum/id
        [HttpGet("{id}")]
        public ActionResult<User> GetUser(string id)
        {
            

            return Ok(_userRepository.GetById(id).Result);
        }

        // PUT: api/UsersDatum/id
        [HttpPut("{id}")]
        public  IActionResult PutUsersDatum(string id, User user)
        {
            if (id != user.IdUser)
            {
                return BadRequest();
            }
            try
            {
                _userRepository.Update(user);

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersDatumExists(id).Result)
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

        // POST: api/UsersDatum
        [HttpPost]
        public ActionResult<User> PostUser(User usersDatum)
        {
            
            try
            {
                _userRepository.Add(usersDatum);
            }
            catch (DbUpdateException)
            {
                if (UsersDatumExists(usersDatum.IdUser).Result)
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUser", new { id = usersDatum.IdUser }, usersDatum);
        }

        // DELETE: api/UsersDatum/id
        [HttpDelete("{id}")]
        public IActionResult DeleteUsersDatum(string id)
        {
            var usersDatum = _userRepository.GetById(id).Result;
            if (usersDatum == null)
            {
                return NotFound();
            }

            _userRepository.Delete(id);


            return NoContent();
        }

        private  async Task <bool> UsersDatumExists(string id)
        {
            return await _userRepository.ExistsById(id);
        }
    }
}

