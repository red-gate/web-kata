
using System.Collections.Generic;

namespace ProductsApi.Controllers {
    public class ProductStore {
        IList<Product> m_ProductList;

        public ProductStore(){
            var p1 = new Product("MyProduct", "some description");
            m_ProductList = new List<Product>(){ p1 };
        }

        public IEnumerable<Product> GetAll(){
            return m_ProductList;
        }

        public void Add(Product product){
            m_ProductList.Add(product);
        }
    }
}