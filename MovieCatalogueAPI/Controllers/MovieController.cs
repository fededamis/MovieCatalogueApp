using Microsoft.AspNetCore.Mvc;

namespace MovieCatalogueAPI.Controllers
{
    public class MovieController : Controller
    {
        private readonly ILogger<MovieController> _logger;

        public MovieController(ILogger<MovieController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetMovies")]
        public string GetMovies()
        {
            return "test22";
        }
    }
}
