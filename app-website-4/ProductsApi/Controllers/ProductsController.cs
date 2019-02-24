using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;
using ProductsApi.Store;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;

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

        [Authorize]
        [HttpDelete]
        public IActionResult Delete(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return NotFound(name);
            }

            if (_mProductStore.GetByName(name) == null)
            {
                return NotFound(name);
            }

            _mProductStore.Remove(name);

            return Ok(name);
        }

        [Authorize]
        [HttpPut]
        public IActionResult Put([FromBody] Product value)
        {
            var result = _mProductStore.GetByName(value.Name);

            if (result == null)
            {
                return NotFound(value);
            }

            _mProductStore.Remove(result.Name);
            _mProductStore.Add(value);

            return Ok(value);
        }

        [HttpGet]
        public IActionResult Get(string name)
        {
            if (name == null)
            {
                return Ok(_mProductStore.GetAll());
            }

            if (string.IsNullOrWhiteSpace(name))
            {
                return NotFound(name);
            }

            var result = _mProductStore.GetByName(name);

            if (result == null)
            {
                return NotFound(name);
            }

            return Ok(result);
        }

        [Authorize]
        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (string.IsNullOrWhiteSpace(value.Name))
            {
                return NotFound(value);
            }

            if (_mProductStore.GetByName(value.Name) != null)
            {
                return StatusCode(StatusCodes.Status409Conflict, value);
            }

            _mProductStore.Add(value);

            return Created("api/Products", value);
        }
    }
}
