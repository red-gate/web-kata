1. `dotnet new webapi -n "ProductsApi"`
1. `dotnet restore`
1. `dotnet build`
1. `dotnet run`
1. Navigate to `http://localhost:5000/api/Values` to check it works

You can write code in Visual Studio by opening the `.csproj`.
When saving files you will be prompted to create a `.sln` and a launch settings file. You only want the `.sln` file.

You can now run by debugging in VS, or from the command line.

Delete auto generated `ValuesController` and add new class `EventsController` with contents:

``` C#
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "SQL Source Control" };
        }
    }
}
```

Navigate to `http://localhost:5000/api/Products` to check it works

Create a new folder called `Model`
In `Model` create a new class `Product` with properties:

```C#
public string Name { get; }
public string Description { get; }
```

Alter `Get()` in `ProductsController` to return an instance of `Product`

Navigate to `http://localhost:5000/api/Products` to check it works

Amend `ProductsController` to maintain a collection of products.

Create a parameterless ctor for `ProductsController` and initialize your collection

Return your collection in `Get()`

Navigate to `http://localhost:5000/api/Products` to check it works

Create a new method on `ProductsController` to handle Post requests:

```C#
[HttpPost]
public void Post([FromBody] Product value) { }
```

Add the product from the post request to your collection

In order to test a POST request you'll need some tooling. I recommend Postman: https://www.getpostman.com/

Send a POST request to `http://localhost:5000/api/Products` with a Content-Type of `application/json` and body:

```
{
	"Name": "Readyroll",
	"Description": "Ready to roll"
}
```

Navigate to `http://localhost:5000/api/Products` to check it works

## It doesn't work!

This is because controllers are instantiated per request.

In order to persist data across requests we need to use dependency injection

First create a new directory `Store`, and in there a class, `ProductStore`

Move the logic for persisting the `Product` collection to `ProductStore`.

E.g. it should have a contract like:

```C#
public IEnumerable<Product> GetAll();
public void Add(Product product);
```

Now make ProductsController depend on the new `ProductStore` by passing it in the constructor and assigning it to a field

Finally, in `Startup`, find `ConfigureServices()` and add the following line:

`services.AddSingleton<ProductStore>();`

This will register `ProductStore` with the dependency injection system.

Because we're using singleton scope, all controller instances that ask for a product store will now have access to the same one

Now make the POST request again, and navigate to `http://localhost:5000/api/Products` to see if it works

## How does it work?
Look at the signature for `Post` again

```C#
public void Post([FromBody] Product value)
```

Notice the `[FromBody]` attribute. This means the value will be automatically parsed from JSON in the request body into the C# type

This process is known as 'Parameter binding'

Parameters can be bound from the request URI also.

For instance, given: 

`GET http://localhost:5000/api/Products/SQL%20Source%20Control`

`Name` can be bound to an argument for your `Get` method

On ProductsController change the signature for `Get` to take a `string name`

```C#
public IEnumerable<Product> Get(string name)
```

At the top of `ProductsController` and a new `Route` attribute

```C#
[Route("api/[controller]/{name}")]
```

If no name is specified in the URI, then `name` will be `null`.

Add logic to return products by name if the supplied `name` isn't `null`.

Navigate to `http://localhost:5000/api/Products` to check it works