# ASP.Net Core Web API 2.0 Kata 2

This kata is desinged to introduce you to creating a web API using ASP.Net Core.

## Resources
https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-2.1

## Prepare
1. verify dotnet version `dotnet --version` is higher than 2.0.0
1. navigate to `.\web-api-2\ProductsApi`
1. run `dotnet restore`
1. run `dotnet build`
1. run `dotnet run`
1. Navigate to `http://localhost:5000/api/Products` to check the starting code works for you

## Kata
In this Kata you will create a web API that can return a list of products

### Debugging in Visual Studio

You can debug in Visual Studio by opening the `.csproj` file
When saving files you will be prompted to create a `.sln` and a launch settings file. Delete the launch settings file as you only want the `.sln` file.

You can now run by debugging in VS, or from the command line.

## Creating the products controller