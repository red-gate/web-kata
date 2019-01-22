using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductsApi.Model
{
    public class Product
    {
        public string Name { get; }
        public string Description { get; }

        public Product(string name , string description)
        {
            Name = name;
            Description = description;
        }
    }
}
