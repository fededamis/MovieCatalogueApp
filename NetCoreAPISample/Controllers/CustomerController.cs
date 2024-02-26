using Microsoft.AspNetCore.Mvc;
using NetCoreAPISample.Models;

namespace NetCoreAPISample.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }        

        [HttpGet]
        [Route("test")]
        public string GetCustomer()
        {
            return "test";
        }

    }
}
