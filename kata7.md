# React App Kata 7

Code for **Kata 7** is available in the [app7](app7) folder.

## Learning aims

The idea here is to learn with Redux is useful and how it can help you build a better web application.

## Requirements

* [dotnet core v2.0](https://www.microsoft.com/net/core)

## Get started

You will need **2** terminals

1. Web API server
    * go to `./app7`
    * verify dotnet version `dotnet --version` is higher than `2.0.0`
    * run `dotnet restore`
    * run `dotnet build`
    * run `dotnet run`

    This should build the web api server and serve it at `http:\\localhost:5000`
1. Web app

* in another terminal
* go to `./app7/app/`
* follow the instructions in the [README](README.md#run-the-app).
* your app should be running at port **3000**

## Single source of truth

One of the main reasons Redux can be very useful in complex applications is that you can share the same data across multiple components in a simple way. Without Redux you would have to pass down props, copy of data and/or callbacks in order to update data for every component.

The way Redux helps you with this is that you can define a single source of truth for your data.
The state of your whole application is store in a single object tree within a single store AND hopefuly you are not duplicating data content anywhere.

This is called the [single source of truth principle](https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)

## Task

Our goal is:

* to share and display data in multiple components while following the single source of truth principle.
* to reuse existing actions to manipulate data in multiple components.

Write the JavaScript/React code to:

1. sharing Actions across components:
    1. in the `ProductContainer` component add the necessary code to remove the current product.
        1. add a button/div inside the `product-header` section
        1. create and dispatch an action that will make the product get deleted from the server
        1. **Note** You should only need to change `ProductContainer` component
1. create a voting button/div next to the remove div in the `ProductItem` component
    1. add a voting button/div in the `ProductItem` component
    1. dispatch a voting action to increment a vote
    1. in the products reducer add a `votes` dictionary next to the `product` array in the products state
        1. each key will be the a product and the value will be the vote count
        1. **Note** Redux maintains an immutable state, therefore you will need to create a new dictionary object each time, e.g. via `Object.assign` or `{...state, key: value}`
    1. make sure the votes object of each product gets incremented when the user votes
    1. add a voting count in the `ProductItem` component
1. show a voting count also in the `ProductContainer`
    1. get the vote count information from the _same place_ than in the previous step
    1. show the votes count in the `product-header`
    1. notice that both vote counts get updated at the same time and should reference the same data

**Note** for the purpose of this exercice the code written will be only in the frontend. A more elegant solution could involve an API call in order to update the store in the backend to keep track of votes.

## Resources

* [Redux basics](https://redux.js.org/docs/basics/)
* [single source of truth principle](https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)