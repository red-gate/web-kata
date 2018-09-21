# ASP.Net Core Web API 2.0 Kata 2

This Kata is designed to introduce you to all the HTTP Verbs that are necessary to implement a CRUD API.

## Resources
https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-2.1
https://docs.microsoft.com/en-us/aspnet/core/web-api/action-return-types?view=aspnetcore-2.1

## Prepare
1. verify dotnet version `dotnet --version` is higher than 2.0.0
1. navigate to `.\web-api-2\ProductsApi`
1. run `dotnet restore`
1. run `dotnet build`
1. run `dotnet run`
1. Navigate to `http://localhost:5000/api/Products` to check the starting code works for you

## Kata

### Debugging in Visual Studio

You can debug in Visual Studio by opening the `.csproj` file
When saving files you may be prompted to create a `.sln` and a launch settings file. Delete the launch settings file as you only want the `.sln` file.

You can now run by debugging in VS, or from the command line.

## CRUD APIs

A common pattern for designing APIs is the CRUD pattern. CRUD stands for 'Create Read Update Delete'. These four operations allow a client to request and manipulate data on the server. It's convenient to design APIs this way as HTTP verbs map to CRUD operations. Data manipulated through CRUD is considered a 'resource'.

CRUD operations can be applied to a collection of resources, specified by the url (e.g. `api/Products`). You can also apply the operations to specific resources by supplying an identifer (e.g. `api/Products/readyroll`). However, not all operations are valid.

The following table shows what HTTP code we should return for success and failures when performing CRUD operations. (Based off https://www.restapitutorial.com/lessons/httpmethods.html)

| HTTP Verb | CRUD   | Success       | Invalid or Not Found | ID Conflict    |
|-----------|--------|---------------|----------------------|----------------|
| POST      | Create | 201 (Created) | 404 (Not Found)      | 409 (Conflict) |
| GET       | Read   | 200 (OK)      | 404 (Not Found)      | n/a            |
| PUT       | Update | 200 (OK)      | 404 (Not Found)      | n/a            |
| DELETE    | Delete | 200 (OK)      | 404 (Not Found)      | na/            |

## Create

Currently the API implements Create, although the return codes are incorrect. In `ProductsController` find the `Post` method.

- If the resource already exists, return `HTTP 409 (Conflict)`. 
- If the name is invalid, return `404 (Not Found)`. Consider a whitespace `name` to be invalid.
- If `Post` succeeds, return `HTTP 201 (Created)`.

Amend the return type to be `IActionResult`. `IActionResult` allows us to specify the HTTP return type. You can then return the correct HTTP response using helper methods. For instance, to return `HTTP 201 (Created)`:

```C#
return Created("api/Products", value);
```

Alternatively, you can specify a status code using the `StatusCodes` class in `Microsoft.AspNetCore.Http`:

```C#
return StatusCode(StatusCodes.Status409Conflict, value);
```

Implement the above using `IActionResult`. Test that it works by sending requests and inspecting the result code.


## Read

Read is also partially implemented in the `Get` method. Change the return type to `IActionResult` and implement the rules.

- If `name` is invalid, return `HTTP 404 (Not found)`. Consider a whitespace `name` to be invalid.
- If `name` is is not found, return `HTTP 404 (Not found)`
- If `Get` succeeds, return `HTTP 200 (OK)`

Remember if `name` is `null`, then that is considered a request for the entire collection.

## Delete

In `ProductStore`, implement a method to delete an item from the store. It should require just the `name` of the product.

Create method to respond to `HTTP DELETE` requests. For example:

```C#
[HttpDelete]
public IActionResult Delete(string name)
{
    // ...
}
```

- If `name` is invalid, return `HTTP 404 (Not found)`. Consider a whitespace `name` to be invalid.
- If `name` is is not found, return `HTTP 404 (Not found)`
- If `Delete` succeeds, return `HTTP 200 (OK)`

## Update

Create method to respond to `HTTP PUT` requests. For example:

```C#
[HttpPut]
public IActionResult Put([FromBody] Product value)
{
    // ...
}
```

Put needs to overwrite an existing resource. Query the store to see if the resource exists.

- If the product is is not found, return `HTTP 404 (Not found)`
- If `Put` succeeds, return `HTTP 200 (OK)`

## Finished

Test the API to see if it behaves in the correct way. Be sure to check the response body and the HTTP Status code.