using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app5.Models;

namespace app5.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ProductStore _productStore;
        public ProductsController()
        {
            _productStore = new ProductStore();
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {     
            return _productStore.Products;
        }
    }
}
