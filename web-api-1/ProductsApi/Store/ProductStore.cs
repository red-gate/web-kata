using System.Collections.Generic;
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

        public void Add(Product product)
        {
            _mProducts.Add(product);
        }
    }
}
