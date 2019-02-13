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
        public IActionResult Get(string name)
        {
            if (_mProductStore.IsNameInvalid(name))
                return StatusCode(StatusCodes.Status422UnprocessableEntity, name);

            var product = _mProductStore.GetByName(name);
            
            return product == null
                ? StatusCode(StatusCodes.Status404NotFound, name)
                : StatusCode(StatusCodes.Status200OK, product);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (_mProductStore.CheckForConflict(value))
                return StatusCode(StatusCodes.Status409Conflict, value);

            if (_mProductStore.IsNameInvalid(value.Name))
                return StatusCode(StatusCodes.Status422UnprocessableEntity, value);

            _mProductStore.Add(value);
            return StatusCode(StatusCodes.Status201Created, value);
        }
    }
}
