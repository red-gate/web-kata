using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly List<Product> m_Products;

        public ProductsController()
        {
            m_Products = new List<Product>();
            m_Products.Add(new Product("SQL Source Control", "fdabndlfb"));
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return m_Products;
        }
    }
}