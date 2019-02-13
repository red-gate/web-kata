using System.Collections.Generic;
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
        public void Post([FromBody] Product value)
        {
            m_ProductStore.Add(value);
        }
    }
}
