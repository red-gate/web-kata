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
        public IActionResult Get(string name)
        {
            if (name == null)
            {
                return Ok(m_ProductStore.GetAll());
            }

            if (name.IsWhiteSpace())
            {
                return StatusCode(StatusCodes.Status404NotFound, name);
            }

            if (!m_ProductStore.Exists(name))
            {
                return StatusCode(StatusCodes.Status404NotFound, name);
            }

            return Ok(m_ProductStore.GetByName(name));
        }

        [HttpDelete]
        public IActionResult Delete(string name)
        {
            if (name.IsWhiteSpace())
                return StatusCode(StatusCodes.Status404NotFound, name);
            if (m_ProductStore.GetByName(name) == null)
                return StatusCode(StatusCodes.Status404NotFound, name);

            m_ProductStore.Delete(name);

            return Ok(name);
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

        [HttpPut]
        public IActionResult Put([FromBody] Product value)
        {
            if (!m_ProductStore.Exists(value.Name))
            {
                return NotFound(value);
            }

            m_ProductStore.Update(value);

            return Ok(value);
        }
    }

    public static class StringExtensions
    {
        public static bool IsWhiteSpace(this string str)
        {
            return str != null && string.IsNullOrWhiteSpace(str);
        }
    }
}
