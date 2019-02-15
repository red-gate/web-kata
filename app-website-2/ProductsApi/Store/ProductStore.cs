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

        public void Delete(string name)
        {
            var product = _mProducts.SingleOrDefault(x => x.Name == name);
            if (product != null)
            {
                _mProducts.Remove(product);
            }
        }

        public bool DoesExist(string name)
        {
            return _mProducts.Exists(x => x.Name == name);
        }

        public bool IsNameInvalid(string name)
        {
            return name.GetType() != typeof(string) || name == "";
        }

        public void Update(Product productToAdd)
        {
            var productToReplace = _mProducts.Single(x => x.Name == productToAdd.Name);
            Delete(productToReplace.Name);
            Add(productToAdd);
        }
    }
}
