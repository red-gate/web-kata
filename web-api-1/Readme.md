1. `dotnet new webapi -n "ProductsApi"`
1. `dotnet restore`
1. `dotnet build`
1. `dotnet run`
1. Navigate to `http://localhost:5000/api/Values` to check it works

You can write code in Visual Studio by opening the `.csproj`.
When saving files you will be prompted to create a `.sln` and a launch settings file. You only want the `.sln` file.

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