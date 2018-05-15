# React App Kata 3 Typescript

Code for **Kata 3 Typescript** is available in the [app3-ts](app3-ts) folder.

## Learning aims

The idea here is to keep learning the concept of `state`, `props`, `callbacks` and React lifecycles in React.

## Task

Write the TypeScript/React code to:

* Filter products by name
* Show/Hide product descriptions

**Note:** Remember you can run `yarn lint` as you develop to see all linting errors as you work

### Filter products

1. In `App.tsx` Add a `<form>` for the product name filter in `filter-products` div. It should contain:
    * `label` for product name
    * `input` for filtering by name
1. Add `productNameToFilter` to `AppState` near the top of `App.tsx`
    * Remember to update the initial state object to initialise `productNameToFilter`
1. Add a handler function for the `onChange` event of the input of the form.
    * Set `productNameToFilter` in `App`'s state to the value from the input field
    * It might be helpful to look at the existing input fields as an example
1. The input filed for setting the product name to filter must be synced with the component's state
    * Set the product filter's input field value to `productNameToFilter` in `App`'s state
    * e.g: `<input ... value={this.state.productNameFilter}/>`
1. Filter products in the `render` method based on filter input.
    * You could do [filter with Typescript array object](https://www.tutorialspoint.com/typescript/typescript_array_filter.htm)

### Show / Hide products

The idea is to have products be collapsible.

1. Change `ProductComponent` so that descriptions are not shown.
    * Do this by adding a `boolean` flag to `ProductComponentState` (for example: `showDescription`)
    * A very common pattern in React is [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html), here are some examples:
        * `{condition? <div>foo</div>: null}`
        * `{condition? <div>foo</div>: <div>bar</div>}`
        * `{condition && <div>hello</div>}`
1. Add a `+` or `-` component next to the product name and toggle it on click
    * It should show or hide the product description.
1. Listen to `onClick` on the component you just created and update your flag accordingly.

## Resources

* [Typescript with React](https://mikebridge.github.io/articles/getting-started-typescript-react-2/)
* [Typescript cheat sheet](https://www.sitepen.com/blog/2013/12/31/typescript-cheat-sheet/)
* [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)