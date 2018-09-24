# React App Kata 7 TypeScript

Code for **Kata 7** is available in the [app-ts-7](app-ts-7) folder.

## Learning aims

The idea here is to learn with Redux is useful and how it can help you build a better web application.

## Requirements

* [dotnet core v2.0](https://www.microsoft.com/net/core)

## Get started

You will need **2** terminals

1. Web API server
    * go to `./app-ts-7`
    * verify dotnet version `dotnet --version` is higher than `2.0.0`
    * run `dotnet restore`
    * run `dotnet build`
    * run `dotnet run`

    This should build the web api server and serve it at `http:\\localhost:5000`
1. Web app

* in another terminal
* go to `./app-ts-7/app/`
* follow the instructions in the [README](README.md#run-the-app).
* your app should be running at port **3000**

## Single source of truth

One of the main reasons Redux can be very useful in complex applications is that you can share the same data across multiple components in a simple way. Without Redux you would have to pass down props, copy of data and/or callbacks in order to update data for every component.

The way Redux helps you with this is that you can define a single source of truth for your data.
The state of your whole application is store in a single object tree within a single store AND hopefully you are not duplicating data content anywhere.

This is called the [single source of truth principle](https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)

## Task

Our goal is:

* to share and display data in multiple components while following the single source of truth principle.
* to reuse existing actions to manipulate data in multiple components.

You may need to refer to kata 6 to refresh on how to use Redux in Typescript

Write the JavaScript/React code to:

1. create a voting button/div next to the remove div in the `ProductItem` component
    1. add a voting button/div in the `ProductItem` component
    1. add support for a voting action in `products.ts`. This is quite involved, so to guide you, you'll need to do the following:
        1. Add a votes variable to `interface ProductsState`
        1. Add a vote action type to `enum TypeKeys`
        1. Export a new `interface` for your product vote action type in `TypeKeys`
        1. Add your new `interface` to `ProductsActionTypes`
        1. Add an action to `ProductsActions`
        1. Amend `createEmptyMember` to satisfy `interface ProductsState`
        1. export an action creator which takes the name of the product to vote for. e.g:
        ```typescript
            export const addVote = (productName: string) => {
            return (dispatch: Dispatch<ProductsState>)  => {
                dispatch(ProductsActions.productVote(productName));
            };
        ```
        1. Pass through the action creator (e.g. `addVote`) to the `ProductItem` through it's props
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

**Note** for the purpose of this exercise the code written will be only in the frontend. A more elegant solution could involve an API call in order to update the store in the backend to keep track of votes.

## Resources

* [Redux basics](https://redux.js.org/docs/basics/)
* [single source of truth principle](https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)