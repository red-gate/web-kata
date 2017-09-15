using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app5.Models;

namespace app5
{
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
        
        public IEnumerable<Product> Products {get;set;}
    }
}