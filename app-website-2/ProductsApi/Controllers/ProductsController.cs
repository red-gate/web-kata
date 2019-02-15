using System.Collections.Generic;
using System.Linq;
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
            if (name == null)
            {
                return Ok(_mProductStore.GetAll());
            }

            if (name.Trim().Length == 0)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }

            var result = _mProductStore.GetByName(name);

            if (result == null)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }

            return Ok(new[]{ result });
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (value.Name.Trim().Length == 0)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }

            if (!_mProductStore.TryAdd(value))
            {
                return StatusCode(StatusCodes.Status409Conflict);
            }

            return Created("api/Products", value);
        }

        [HttpDelete]
        public IActionResult Delete(string name)
        {
            if (name == null || name.Trim().Length == 0)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }

            var result = _mProductStore.GetByName(name);

            if (result == null)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }

            _mProductStore.Remove(name);
            return Ok();
        }

        [HttpPut]
        public IActionResult Put([FromBody] Product value)
        {
            if (value?.Name == null)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }

            foreach (var product in _mProductStore.GetAll())
            {
                if (product.Name == value.Name)
                {
                    product.Description = value.Description;
                    return Ok();
                }
            }

            return StatusCode(StatusCodes.Status404NotFound);
        }
    }
}

