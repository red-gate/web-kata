using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;
using ProductsApi.Store;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        public ProductStore ProductStore { get; }

        public ProductsController(ProductStore productStore)
        {
            ProductStore = productStore;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return ProductStore.GetAll();
        }

        [HttpPost]
        public void Post([FromBody] Product value)
        {
            ProductStore.Add(value);
        }
    }
}