using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app6.Models;
using app6;

namespace app6.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProductsController : Controller
    {
        private readonly ProductStore _productStore;
        public ProductsController(ProductStore productStore)
        {
            _productStore = productStore;
        }

        // GET api/products/get
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _productStore.Products;
        }

        // POST api/products/add
        [HttpPost]
        public IEnumerable<Product> Add([FromBody]Product newProduct)
        {
            _productStore.AddProduct(newProduct);
            return _productStore.Products;
        }

        // DELETE api/products/delete/ReadyRoll
        [HttpDelete("{name}")]
        public IEnumerable<Product> Delete(string name)
        {
            _productStore.RemoveProduct(name);
            return _productStore.Products;
        }
    }
}
