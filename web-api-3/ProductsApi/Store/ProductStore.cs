using System.Collections.Generic;
using System.Linq;
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
                new Product("SQL Source Control", "Source control your SQL Server databases"),
                new Product("SQL Clone", "Rapid provisioning of databases"),
                new Product("SQL Compare", "Compare and deploy the structure of Microsoft SQL Server databases")
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

        public void Remove(string name)
        {
            var product = GetByName(name);
            _mProducts.Remove(product);
        }
    }
}
