namespace ProductsApi.Model
{
    public class Product
    {

        public Product(string name, string description)
        {
            Name = name;
            Description = description;
        }

        public string Name { get; }
        public string Description { get; set; }
    }
}