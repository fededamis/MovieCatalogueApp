using Microsoft.AspNetCore.Mvc;
using MovieCatalogueAPI.Models;

namespace MovieCatalogueAPI.Controllers
{
    public class MovieController : Controller
    {
        private readonly ILogger<MovieController> _logger;
        private readonly IConfiguration _configuration;

        public MovieController(
            ILogger<MovieController> logger, 
            IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetMovies")]
        public List<Movie> GetMovies()
        {
            var connString = _configuration.GetConnectionString("MovieCatalogueDB");
            using var context = new MovieCatalogueDbContext(connString);
           
            //FIX ERROR
            var movies = context.Movies.ToList();

            return movies;            
        }
    }
}
