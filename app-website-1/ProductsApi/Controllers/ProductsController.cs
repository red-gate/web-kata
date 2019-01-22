using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    [Route("api/[controller]/{name}")]
    public class ProductsController : Controller
    {
        ProductStore m_ProductStore;

        public ProductsController(ProductStore productStore){
            m_ProductStore = productStore;
        }

        [HttpGet]
        public IEnumerable<Product> Get(string name)
        {
            var allProducts = m_ProductStore.GetAll();
            if (name == null){
                return allProducts;
            }
            return allProducts.Where(p => p.Name== name);
        }

        [HttpPost]
        public void Post([FromBody] Product value){
            m_ProductStore.Add(value);
        }
    }
}