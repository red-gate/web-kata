using System;
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
            if (name == null)
            {
                return Ok(_mProductStore.GetAll());
            }

            if (String.IsNullOrWhiteSpace(name))
            {
                return NotFound();
            }

            var product = _mProductStore.GetByName(name);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (String.IsNullOrWhiteSpace(value.Name))
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

        [HttpDelete]
        public IActionResult Delete(string name)
        {
            if (String.IsNullOrWhiteSpace(name))
            {
                return NotFound();
            }

            var product = _mProductStore.GetByName(name);

            if (product == null)
            {
                return NotFound();
            }
            
            _mProductStore.Delete(name);
            return Ok();
        }
        
        [HttpPut]
        public IActionResult Put([FromBody] Product value)
        {
            var product = _mProductStore.GetByName(value.Name);

            if (product == null)
            {
                return NotFound();
            }

            product.Description = value.Description;
            
            _mProductStore.Update(product);
            return Ok();
        }
    }
}
