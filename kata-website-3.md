# Website Kata 3

This Kata is designed to introduce you to developing a front-end using Promises.

## Resources
https://developers.google.com/web/fundamentals/primers/promises
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Prepare
### The server
1. verify dotnet version `dotnet --version` is higher than 2.0.0
1. navigate to `.\web-api-3\ProductsApi`
1. run `dotnet restore`
1. run `dotnet build`
1. run `dotnet run`
1. Navigate to `http://localhost:5000/api/Products` to check the starting code works for you

### The front-end app
1. open a new terminal window
1. navigate to `.\web-api-3\app`
1. yarn
1. yarn start

## Kata

This Kata will introduce you to writing asynchronous JavaScript using Promises. We're going to access the web API we developed in the previous Kata from a front using JavaScript Promises.

This is similar to [React Kata 5](kata5.md). However this time you must use Promises. We also care more about 

### Promises 

JS Promises introduce a common pattern for executing operations on the result of an asynchronous operation. They also allow you to cope with error cases with ease.

A promise can be:

- fulfilled - The action relating to the promise succeeded
- rejected - The action relating to the promise failed
- pending - Hasn't fulfilled or rejected yet
- settled - Has fulfilled or rejected

Promise objects can easily be created like so:

```JavaScript
var promise = new Promise(function(resolve, reject) {
  // do something, possibly asynchronous

  if (/* success */) {
    resolve("Promise fulfilled");
  }
  else {
    reject(Error("Promise rejected"));
  }
});
```

It can then be consumed like so:

```JavaScript
promise.then(function(result) {
  console.log(result); // Promise fulfilled
}, function(err) {
  console.log(err); // Promise rejected
});
```
`.then` requires two callbacks, one for success `onSuccess`, and one for rejection, `onRejected`. Both of these are optional.


### Hitting an API with promises

The `fetch` API allows you to access HTTP endpoints, and returns promises to access the results. For instance;

```JavaScript
fetch('http://example.com/movies')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

Note that `response` is a HTTP response, not a JSON object. To convert it into JSON, we use `response.json()`. This also returns a promise. Therefore another `.then` method is called in order to read the JSON from the HTTP response body.

`fetch` can be used for all `HTTP` verbs. Here is an example of a `HTTP POST` request using `fetch`:

```JavaScript
const data = { name: "Predator", description: "GET TO THE CHOPPA" };

fetch('http://example.com/movies',
{
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.log(error));
```

### Task

1. Display a list of products from the `ProductsApi`
  - You'll want to populate `products` in `App`'s state
  - Access the API using `fetch`
  - When the promise is fulfilled, set `App`'s state to be populated from the HTTP response json
1. Create a form to add products
  - Create a new `ProductForm` component and add it to `App`
  - On `ProductForm` have input fields for new product name and description, along with a submit button
    - https://reactjs.org/docs/forms.html#controlled-components might help
1. Using the product form, send `HTTP POST` requests to the end point to add products
