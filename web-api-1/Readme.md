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

Send a POST request with a Content-Type of `application/json` and body of:

```
{
	"Name": "Readyroll",
	"Description": "Ready to roll"
}
```

Navigate to `http://localhost:5000/api/Products` to check it works