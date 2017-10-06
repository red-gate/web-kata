# React App Kata 5

Code for **Kata 5** is available in the [app5](app5) folder.

## Learning aims

Up to now all data work has used the `data.js` file to focus on frontend work.
We are now moving the data to a backend server ins [aspnet core](https://www.microsoft.com/net/core).

The idea here is to learn how a web app can interact with a backend server through REST API calls.

## Requirements:

* [dotnet core v2.0](https://www.microsoft.com/net/core)

## Get started:

You will need **2** terminals

1) Web API server

* go to `./app5`
* run `dotnet restore`
* run `dotnet build`
* run `dotnet run`

This should build the web api server and serve it at `http:\\localhost:5000`

2) Web app

* go to `./app5/app/`
* follow the instructions in the [README](README.md).

## Task

You are given a server that exposes the following REST endpoints.

|description| method | api call | notes
|---|----|---|----|
|list all products| `GET` | `http:localhost:3000/api/products`||
|delete product| `DELETE`| `http:localhost:3000/api/products/readyroll`||
|add product| `POST` | `http:localhost:3000/api/products/add` | `json/application` with body `{name: 'product1', description: 'product description here'}`|

Write the JavaScript/React code to:

* List all products in home page when the app is loaded.
    * you can use technologies like [jQuery.ajax](http://api.jquery.com/jquery.ajax/) or [fetch](https://github.github.io/fetch/)
    * to add a package do [yarn add](https://yarnpkg.com/lang/en/docs/cli/add/)
* Navigate to each product page
* Have hard links on products names
* Request product details when someone selected a products.
* Changes to the data should persist through sessions:
    * Be able to remove a product
    * Be able to add a product
    * If you refresh the browser product changes should persist (**Note** this was not the case before)