# React App Kata 2

Code for **Kata 2** is available in the `app2` folder.

## Learning aims

The idea here is understand the concept of a `state` and callbacks in a React component.

How `state` works and how to modify it.

## Task

Write the JavaScript/React code to: 
* Add new products to the listed products
* Be able to remove products from the list of products


1. Move the `data.products` passed to the `<Products>` component to a `state` property in `App.js` and pass `this.state.products` to `<Products>` instead
    * [constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)
2. Add a `Form` to add new products within the `add-product` div. It should contain:
    * `label` for product name
    * `input` for product name
    * `label` for description
    * `input` for description
    * a submit button
2. Add a handler function for the `onSubmit` event of the form. The function should:
    * get `name` and `description` from the event
    * update the products array in the state with a new product. ([Using State Correctly](https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly))
    * keep in mind that [State Updates are Merged](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-are-merged)
3. Add a function to remove a product in `App.js` 
    * you could use underscore function [filter](http://underscorejs.org/#filter) to create a new array of products
    * underscore is already available in the project and imported.
4. Make the remove product function available to use in all `<Product>` components and use it when the div with the `remove` class is clicked.
5. Test that you can add products and remove them from the app.

# Resources:

* [Forms](https://facebook.github.io/react/docs/forms.html)
* [Handling Multiple Inputs in Forms](https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs)
* [Constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)