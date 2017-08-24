# React App Kata 4

Code for **Kata 4** is available in the [app4](app4) folder.

## Learning aims

The idea here is learn how to add a router to our react app.

## Task

You are given an app that lists all redgate products by name.

Write the JavaScript/React code to: 

* Navigate to each product page
* Be able to share hard links of any product page

1. Install `react-router-dom`
    * [yarn add](https://yarnpkg.com/lang/en/docs/cli/add/)
2. Add `BrowserRouter` to your root component
    * [BrowserRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md)
3. Create hard links in the `ProductMenu` component to link to `/products/productName` e.g: `/products/ReadyRoll`
    * [Link in react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)
4. Listen to url changes in the `<ProductContainer>` component
    * [Route in react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md)
5. add a `productName` in the `<productContainer>` component and initialize it from the route.
    * [Access Route Params in React Router v4](https://jaketrent.com/post/access-route-params-react-router-v4/)
6. Find the correct product and display it.
7. `<productContainer>` component does not get re created on url changes so you will need to handle property changes.
    * [component lifecycle](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)

# Resources:

* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)