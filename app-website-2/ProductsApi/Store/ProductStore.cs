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

        public bool TryAdd(Product product)
        {
            if (_mProducts.Any(p => p.Name == product.Name))
            {
                return false;
            }
            _mProducts.Add(product);
            return true;
        }

        public void Remove(string name)
        {
            _mProducts.RemoveAll(product => product.Name == name);
        }
    }
}
