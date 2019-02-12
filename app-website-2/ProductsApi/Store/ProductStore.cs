using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using ProductsApi.Model;

namespace ProductsApi.Store
{
    public class ProductStore
    {
        private readonly List<Product> _mProducts;

        public ProductStore()
        {
            _mProducts = new List<Product>
            {
                new Product("SQL Source Control", "Source control your SQL Server databases.")
            };
        }

        public IEnumerable<Product> GetAll()
        {
            return _mProducts;
        }

        public Product GetByName(string name)
        {
            return _mProducts.Exists(p => p.Name == name) ? _mProducts.Single(p => p.Name == name) : null;
        }

        public void Add(Product product)
        {
            _mProducts.Add(product);
        }

        public void Delete(string name)
        {
            var product = GetByName(name);
            _mProducts.Remove(product);
        }

        public void Update(Product product)
        {
        }
    }
}
