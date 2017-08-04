# React App Kata 1

Code for **Kata 1** is available in the `app1` folder.

## Learning aims

### 1 - create a small program using Object Calisthenics

The idea here is to get introduce into React applications and some basic concepts around it.

* Learn basics of React
* How to create React components
* How to render multiple components
* How import components
* Learn about `props`

## Task

Write the JavaScript code to:

1. Show a list of Redgate products in `App.js`.
    * Import `.\data.js` to do this
    * [Rendering Multiple Components](https://facebook.github.io/react/docs/lists-and-keys.html#rendering-multiple-components)
2. Check the `console.log` and fix any warning you might have.
2. In `App.js` create a `<Products />` component to extract the responsibility into a separate component.
3. Pass the array of products as [props](https://facebook.github.io/react/docs/components-and-props.html) into the `Products` component
4. Move the `Products` component into a `Products.js` and call it from `App.js`
5. Create a `Product` inside `Products.js` file and use it in the `<Products />` component.
6. Some of the products are **free** others are **new**. Be sure to show this information in the product list.
7. Add some styles to your app, add your css classes to `App.css` and `Products.css`