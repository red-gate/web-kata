using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;
using ProductsApi.Store;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    [Route("api/[controller]/{name}")]
    public class ProductsController : Controller
    {
        private readonly ProductStore _mProductStore;

        public ProductsController(ProductStore productStore)
        {
            _mProductStore = productStore;
        }

        [HttpGet]
        public IEnumerable<Product> Get(string name)
        {
            return name == null ? _mProductStore.GetAll() : new List<Product> {_mProductStore.GetByName(name)};
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (_mProductStore.CheckForConflict(value))
                return StatusCode(StatusCodes.Status409Conflict, value);

            if (value.Name.GetType() != typeof(string) || value.Name == "")
                return StatusCode(StatusCodes.Status422UnprocessableEntity, value);

            _mProductStore.Add(value);
            return StatusCode(StatusCodes.Status201Created, value);
        }
    }
}
