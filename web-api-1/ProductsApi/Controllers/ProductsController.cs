using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly List<Product> _mProducts;

        public ProductsController()
        {
            _mProducts = new List<Product>
            {
                new Product("SQL Source Control", "Source control your SQL Server databases.")
            };
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _mProducts;
        }
    }
}
