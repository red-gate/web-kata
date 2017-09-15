using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app5.Models;
using app5;

namespace app5.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ProductStore _productStore;
        public ProductsController(ProductStore productStore)
        {
            _productStore = productStore;
        }
        
        // GET api/products
        [HttpGet]
        public IEnumerable<Product> Get()
        {     
            return _productStore.Products;
        }

        [HttpPost]
        public  IEnumerable<Product> Add(string name, string description){
            _productStore.AddProduct(
                new Product{
                    Name = name,
                    Description = description
                }
            );
            return _productStore.Products;
        }

        // DELETE api/products/ReadyRoll
        [HttpDelete("{name}")]
        public void Delete(string name){
            _productStore.RemoveProduct(name);
        }
    }
}
