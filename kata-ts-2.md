# React App Kata 2 Typescript

Code for **Kata 2 Typescript** is available in the [app2-ts](app2-ts) folder.

## Learning aims

The idea here is understand the concept of `state` and callbacks in a Typescript React component.

## Task

Write the Typescript code to:

* Add new products to the listed products
* Be able to remove products from the list of products

React components can have a `state` alongside `props` (we only saw props in the first kata). We want to use `state` in the `App` component to store the list of products

1. In `App.tsx` create an `interface` to define the state of `<App />`:
    ```typescript
        interface AppState {
            products: Product[]; //imported from `/Models/Product.ts
            newProductName: string;
            newProductDescription: string;
        }
    ```
1. Alter the signature of `<App />` to use `AppState`
    * `class App extends Component<{}, AppState>`
1. Currently `products` is defined globally at the top of the file (line 7). Change this so that the list of products is retrieved in the constructor `<App />`
    * [constructors in React](https://facebook.github.io/react/docs/react-component.html#constructor)
1. Store the list of products in `<App />`s state in the constructor.
    * [See adding state to a class](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
    * You'll also have to initialise `newProductName` adn `newProductDescription` to empty strings
1. Create a `<form>` to add new products within the `add-product` div. It should contain:
    * `label` for the new product name
    * `input` for the new product name
    * `label` for the new description
    * `input` for the new description
    * `button` for form submission
1. Make the input fields display their corresponding values stored in `<App />`'s state.
    * Use the `value` attribute, e.g. `<input name="newProductName" value={this.state.newProductName} />`
1. We're going to use an event handler to respond to changes in `name` and `description`.
    * Create a function in  `<App />` with the signature `onNameChange(event: React.FormEvent<HTMLInputElement>): void`
    * Bind the `this` keyword to the function:
        * In the constructor add `this.onNameChange = this.onNameChange.bind(this);`
    * Set the `onChange` attribute in the product name input field to `onNameChange`
        * e.g. `<input name="newProductName" onChange={this.onNameChange} />`
    * Make corresponding changes for the new product description input field
1. Inside the event handler funcitons, update `<App />`'s state with the corresponding data
    * e.g store the value of the new product name input field in `newProductName` in `<App />`'s state
    * You can access the value of the input field using `event.currentTarget.value`
1. Create a handler function for the `onClick` event of the submit button on the form
    * Create a function in `<App />` with the signature `onSubmit(event: React.FormEvent<HTMLButtonElement>): void`
    * On the first line write `event.preventDefault();` to prevent the page from refreshing
    * Bind the `this` keyword to the function:
        * In the constructor add `this.onSubmit = this.onSubmit.bind(this);`
    * Construct a new object of type `Product` using `newProductName` and `newProductDescription` in `<App />`'s state
    * Add the new `Product` object to the array of `Product`s `<App />`'s state
1. Add a function to remove a product in  `<App />`
    * You might find the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function available in arrays helpful
1. In `ProductList.tsx`, make the remove product function available to use in all `<ProductItem>` components and use it when the div with the `remove` class is clicked
    * You'll need to alter `ProductItemProps` to pass the function to remove an item
    * You can use the `Function` type to do this
1. Test that you can add products and remove them from the app.

## Resources

* [Typescript React component example](https://github.com/piotrwitek/react-redux-typescript-guide#stateful-components---class)
* [Another Typescript React component example](https://github.com/Microsoft/TypeScript-React-Starter#creating-a-component)
* [Forms](https://facebook.github.io/react/docs/forms.html)
* [Handling Multiple Inputs in Forms](https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs)