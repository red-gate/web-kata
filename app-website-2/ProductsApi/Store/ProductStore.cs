using System.Collections.Generic;
using System.Linq;
using ProductsApi.Model;

namespace ProductsApi.Store
{
    public class ProductStore
    {
        private readonly List<Product> m_Products;

        public ProductStore()
        {
            m_Products = new List<Product>
            {
                new Product("SQL Source Control", "Source control your SQL Server databases.")
            };
        }

        public IEnumerable<Product> GetAll()
        {
            return m_Products;
        }

        public Product GetByName(string name)
        {
            return Exists(name) ? m_Products.Single(p => p.Name == name) : null;
        }

        public bool Exists(string name)
        {
            return m_Products.Exists(p => p.Name == name);
        }

        public void Add(Product product)
        {
            m_Products.Add(product);
        }
    }
}
