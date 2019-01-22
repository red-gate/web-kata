using ProductsApi.Model;
using System;
using System.Collections.Generic;
using System.Linq;

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

        public Product GetByName(string name)
        {
            return m_Products.First(p => p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
        }
    }
}
