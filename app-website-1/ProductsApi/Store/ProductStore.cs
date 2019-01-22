using ProductsApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductsApi.Store
{
    public class ProductStore
    {
        private readonly List<Product> m_Products = new List<Product>();

        public IEnumerable<Product> GetAll()
        {
            return m_Products;
        }

        public void Add(Product product)
        {
            m_Products.Add(product);
        }
    }
}
