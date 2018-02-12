# React App Kata 103 in TypeScript

Code for **Kata 103** is available in the [app3-ts](app3-ts) folder.

## Learning aims

Learn about how to use TypeScript with React.

## Task

Write the TypeScript/React code to:

* Filter products by name
* Show/Hide product descriptions

### Filter products

1. Add a `<form>` to filter products within the `filter-products` div. It should contain:
    * `label` for product name
    * `input` for filtering by name
1. Add a field containing the product name to filter to `AppState` in `App.tsx`
1. Add a handler function for the `onChange` event of the input of the form.
    * save the product `name` from the event in `AppState`
1. Filter products in the `render` method based on filter input.
    * you could do [filter with Typescript array object](https://www.tutorialspoint.com/typescript/typescript_array_filter.htm)

### Show / Hide products

The idea is to have products be collapsible.

1. Change `ProductComponent` so that descriptions are not shown.
    * do this by checking a product state property (for example: `showDescription`)
    * a very common pattern in React is [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html), here are some examples:
        * `{condition? <div>foo</div>: null}`
        * `{condition? <div>foo</div>: <div>bar</div>}`
        * `{condition && <div>hello</div>}`
1. Add a `+` or `-` component next to the product name and toggle it on click
    * it should show or hide the product description.
1. listen to `onClick` on the component you just created and update your flag accordingly.

## Resources

* [Typescript with React](https://mikebridge.github.io/articles/getting-started-typescript-react-2/)
* [Typescript cheat sheet](https://www.sitepen.com/blog/2013/12/31/typescript-cheat-sheet/)
* [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)
