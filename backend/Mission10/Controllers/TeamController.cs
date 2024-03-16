using Mission10.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mission10.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;

        public TeamController(IBowlerRepository temp)
        {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Team> Get()
        {
            var teamData = _bowlerRepository.Teams.ToArray();

            return teamData;
        }
    }
}