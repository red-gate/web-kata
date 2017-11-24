using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app6.Models;

namespace app6
{
    // Note: this store is not thread safe
    public class ProductStore
    {
        public ProductStore()
        {
            Products = InitialStore();
        }

        public IEnumerable<Product> Products { get; set; }

        public void AddProduct(Product p)
        {
            Products = Products.Append(p);
        }

        public void RemoveProduct(string name)
        {
            var products = Products.ToList();
            var product = products.Where(p => p.Name.ToLower() == name.ToLower()).SingleOrDefault();
            if (product != null)
            {
                products.Remove(product);
                Products = products;
            }
        }

        private IEnumerable<Product> InitialStore()
        {
            return new List<Product>()
            {
                {
                    new Product
                    {
                        Name = "SQL Compare",
                        Description = "Compares and synchronizes SQL Server database schemas"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Data Compare",
                        Description = "Compares and synchronizes SQL Server database contents"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Source Control",
                        Description = "Connect your databases to your source control system"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Prompt",
                        Description = "Write, format, and refactor SQL effortlessly"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Monitor",
                        Description = "Real-time SQL Server performance monitoring, with alerts and diagnostics"
                    }
                },
                {
                    new Product
                    {
                        Name= "DLM Automation",
                        Description = "Automate your database changes with CI and automated deployment"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Clone",
                        Description = "Create SQL Server database copies in an instant",
                        IsNew = true
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Backup",
                        Description = "Compresses, strengthens, and encrypts backups"
                    }
                },
                {
                    new Product
                    {
                        Name= "DLM Dashboard",
                        Description = "Be the first to know when any of your database schemas change",
                        IsFree= true
                    }
                },
                {
                    new Product
                    {
                        Name= "ReadyRoll",
                        Description = "Migrate through schema versions with ordered scripts in Visual Studio"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Search",
                        Description = "Search within SQL Server database schemas",
                        IsFree= true
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Doc",
                        Description = "Document SQL Server databases"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Data Generator",
                        Description = "Test data generator for SQL Server databases"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Test",
                        Description = "Unit test add-in for SQL Server Management Studio"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Dependency Tracker",
                        Description = "Visualizes SQL Server object dependencies"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Multi Script",
                        Description = "Deploy multiple scripts to multiple servers with one click"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Scripts Manager",
                        Description = "Powerful, reliable, automated scripting by SQL Server experts, for the community",
                        IsFree= true
                    }
                },
                {
                    new Product
                   {
                        Name= "SQL Index Manager",
                        Description = "Analyze, manage, and fix database index fragmentation"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Comparison SDK",
                        Description = "Automates comparison and synchronization tasks"
                    }
                },
                {
                    new Product
                    {
                        Name= "SQL Code Guard",
                        Description = "Find code issues in an entire SQL Server database or a query window"
                    }
                }
            };
        }
    }
}