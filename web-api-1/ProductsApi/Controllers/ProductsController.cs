using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;
using ProductsApi.Store;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ProductStore _mProductStore;

        public ProductsController(ProductStore productStore)
        {
            _mProductStore = productStore;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _mProductStore.GetAll();
        }

        [HttpPost]
        public void Post([FromBody] Product value)
        {
            _mProductStore.Add(value);
        }
    }
}
