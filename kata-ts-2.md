# React App Kata 2 Typescript

Code for **Kata 2 Typescript** is available in the [app2-ts](app2-ts) folder.

## Learning aims

The idea here is understand the concept of a `state` and callbacks in a Typescript React component.

How `state` works and how to modify it.

## Task

Write the Typescript code to:

* Add new products to the listed products
* Be able to remove products from the list of products

**Note:** Remember you can run `yarn lint` as you develop to see all linting errors as you work

1. React components can have a `state` alongside `props` (we only saw props in the first kata). We want to use `state` in the `App` component to store the list of products
    * Create a new [`interface`](https://www.typescriptlang.org/docs/handbook/interfaces.html) to define the state of `App`
    * It should store an array of the type `Product` from `/Models/Product.ts`
    * It should also have fields for `newProductName` and `newProductDescription`
1. Currently `products` is defined globally at the top of the file (line 7). Change this so `products` is defined in the constructor as part of `App.tsx`'s state
    * [constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)
    * Remember to `import { Product } from './Models/Product'`
1. Add a `<form>` to add new products within the `add-product` div. It should contain:
    * `label` for product name
    * `input` for product name
    * `label` for description
    * `input` for description
    * A submit button
1. Add a handler for when `name` and `description` change
    * You'll need to use the `FormEvent<T>` type to handle events, e.g. `function onNameChange(event: React.FormEvent<HTMLInputElement>){...}`, and `event.currentTarget.value` to get information from the input field
    * Store the relevant information in `newProductName` and `newProductDescription` in `App`'s state [setting state in React](https://reactjs.org/docs/react-component.html#setstate)
1. Add a handler function for the `onSubmit` event of the form. The function should:
    * Construct an object of type `Product` from `newProductName` and `newProductDescription` in `App`'s state
    * Add the `Product` object to `App`'s state
    * Clear `newProductName` and `newProductDescription` in `App`'s state
1. Add a function to remove a product in `App.tsx`
    * You might find the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function available in arrays helpful
1. Make the remove product function available to use in all `<ProductItem>` components and use it when the div with the `remove` class is clicked.
1. Test that you can add products and remove them from the app.

## Resources

* [Typescript React component example](https://github.com/piotrwitek/react-redux-typescript-guide#stateful-components---class)
* [Another Typescript React component example](https://github.com/Microsoft/TypeScript-React-Starter#creating-a-component)
* [Forms](https://facebook.github.io/react/docs/forms.html)
* [Handling Multiple Inputs in Forms](https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs)
* [Constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)