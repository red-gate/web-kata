# Website Kata 2

This Kata is designed to introduce you to all the HTTP Verbs that are necessary to implement a CRUD API.

## Resources

- https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-2.1
- https://docs.microsoft.com/en-us/aspnet/core/web-api/action-return-types?view=aspnetcore-2.1

## Prepare
1. verify dotnet version `dotnet --version` is higher than 2.0.0
1. navigate to `.\app-website-2\ProductsApi`
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

A common pattern for designing APIs is CRUD. CRUD stands for 'Create Read Update Delete'. These four operations allow a client to request and manipulate data on the server. It's convenient to design APIs this way as HTTP verbs intuitively map to CRUD operations. Data manipulated through CRUD is considered a 'resource'.

CRUD operations can be applied to a collection of resources, specified by the url (e.g. `api/Products`). You can also apply the operations to specific resources by supplying an identifer (e.g. `api/Products/readyroll`).

The following table shows what HTTP status code the API should respond with when performing CRUD operations:

| HTTP Verb | CRUD   | Success       | Invalid or Not Found | ID Conflict    |
|-----------|--------|---------------|----------------------|----------------|
| POST      | Create | 201 (Created) | 404 (Not Found)      | 409 (Conflict) |
| GET       | Read   | 200 (OK)      | 404 (Not Found)      | n/a            |
| PUT       | Update | 200 (OK)      | 404 (Not Found)      | n/a            |
| DELETE    | Delete | 200 (OK)      | 404 (Not Found)      | na/            |


(This is a simplified version of what's found on https://www.restapitutorial.com/lessons/httpmethods.html)

## Create

Currently the API partially implements Create, although the return codes are incorrect. In `ProductsController` find the `Post` method.

Amend the return type to be `IActionResult`. `IActionResult` allows the method to specify a HTTP status response code.

Return the correct HTTP response using helper methods. For instance, to return `HTTP 201 (Created)`:

```C#
return Created("api/Products", value);
```

Alternatively, specify a status code using the `StatusCodes` class in `Microsoft.AspNetCore.Http`:

```C#
return StatusCode(StatusCodes.Status409Conflict, value);
```

Implement the following rules for `Post`:

- If the resource already exists, return `HTTP 409 (Conflict)`. 
- If the name is invalid, return `404 (Not Found)`. Consider a whitespace `name` to be invalid.
- If `Post` succeeds, return `HTTP 201 (Created)`.

Test that it works by sending `HTTP POST` requests to the API and inspecting the Status code.

### Note on testing the API

To test requests which require an object as an argument such as `HTTP POST`, send the request with a Content-Type of `application/json` and body. e.g:

```
{
	"Name": "Readyroll",
	"Description": "Ready to roll"
}
```

The JSON ought to correspond to the data classes found in the `Model` folder.

## Read

Read is also partially implemented in the `Get` method. Change the return type of `Get` to `IActionResult` and implement these rules:

- If `name` is invalid, return `HTTP 404 (Not found)`. Consider a whitespace `name` to be invalid.
- If `name` is is not found, return `HTTP 404 (Not found)`
- If `Get` succeeds, return `HTTP 200 (OK)`

Remember if `name` is `null`, then that is considered a request for the entire collection.

Test that it works by sending `HTTP GET` requests to the API and inspecting the Status code.

## Delete

Amend `ProductStore` to have a method which deletes a product based on a product name.

In `ProductsController`, implement a method to respond to `HTTP DELETE` requests. It should require just the `name` of the product as an argument. For example:

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

Test that it works by sending `HTTP DELETE` requests to the API and inspecting the Status code.

## Update

Implement a method to respond to `HTTP PUT` requests. It should require an instance of `Product` an argument. This will be parsed from the JSON body of the `PUT` request, in the same way as `POST` requests. For example:

```C#
[HttpPut]
public IActionResult Put([FromBody] Product value)
{
    // ...
}
```

Update's contract is that it replaces an existing resource. If the resource doesn't exist, then it is an invalid operation. You'll therefore have to query the store to see if the resource exists before you can update it.

- If the product is is not found, return `HTTP 404 (Not found)`
- If `Put` succeeds, return `HTTP 200 (OK)`

Test that it works by sending `HTTP PUT` requests to the API and inspecting the Status code.