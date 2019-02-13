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
        private readonly ProductStore m_ProductStore;

        public ProductsController(ProductStore productStore)
        {
            m_ProductStore = productStore;
        }

        [HttpGet]
        public IEnumerable<Product> Get(string name)
        {
            return name == null ? m_ProductStore.GetAll() : new List<Product> { m_ProductStore.GetByName(name) };
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (string.IsNullOrWhiteSpace(value.Name))
            {
                return StatusCode(StatusCodes.Status404NotFound, value);
            }

            if (m_ProductStore.Exists(value.Name))
            {
                return StatusCode(StatusCodes.Status409Conflict, value);
            }
            
            m_ProductStore.Add(value);

            return Created("api/Products", value);
        }
    }
}
