using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var product = new Product("SQL Source Control", "Source control your SQL Server databases.");
            return new[] { product };
        }
    }
}
