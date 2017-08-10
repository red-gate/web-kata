# React App Kata 1

Code for **Kata 2** is available in the `app2` folder.

## Learning aims

The idea here is understand the concept of a `state` and callbacks in a React component.

How the `state` work and `how` to modify it.

## Task

Write the JavaScript/React code to: 
* Add new products to the listed products.
* Be able to remove products from the list of products


1. Move the `data.products` passed to the `<Products>` component to a state property
    * [constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)
2. Add a Form to add new products withing the `add-product` div. It should contain:
    * `label` for product name
    * `input` for product name
    * `label` for description
    * `input` for description
    * a submit button
2. Add a `handleAddProduct` function `onSubmit` of the form. The function should
    * get `name` and `description` from the event
    * update the products array in the state with a new product. ([Using State Correctly](https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly))
    * keep in mind that [State Updates are Merged](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-are-merged)
3. Add a `removeProduct` function in `App.js` that removes a product from `this.state.products`
    * you could use underscore function [filter](http://underscorejs.org/#filter) to create a new array of products
    * underscore is already available in the project and imported.
4. Pass the `removeProduct` function as a property to the `<Products>` component and to the `<Product>` component and call it onClick of `remove`
5. Test that you can add products and remove them from the app.

# Recommendations:

* [Forms](https://facebook.github.io/react/docs/forms.html)
* [Handling Multiple Inputs in Forms](https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs)
* [Constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)