using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app5.Models;

namespace app5
{
    // Note: this store is not thread safe
    public class ProductStore
    {
        public ProductStore()
        {
            Products = new List<Product>()
            {
                {
                    new Product
                    {
                        Name = "SQL Compare",
                        Description = "Compares and synchronizes SQL Server database schemas"
                    }
                }
            };
        }

        public IEnumerable<Product> Products { get; set; }

        public void AddProduct(Product p)
        {
            Products.Append(p);
        }

        public void RemoveProduct(string name){
            var products = Products.ToList();
            var product = products.Where(p => p.Name == name).SingleOrDefault();
            if(product != null){
                products.Remove(product);
                Products = products;
            }
        }
    }
}