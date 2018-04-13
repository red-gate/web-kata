# React App Kata 4 Typescript

Code for **Kata 4 Typescript** is available in the [app-ts-4](app-ts-4) folder.

## Learning aims

The idea here is learn how to add a router to our react app.

## Task

You are given an app that lists all redgate products by name.

Write the TypeScript/React code to:

* Navigate to each product page
* Be able to share hard links of any product page

1. Install `react-router-dom` and it's TypeScript bindings:
    * [yarn add](https://yarnpkg.com/lang/en/docs/cli/add/) `react-router-dom` `@types/react-router-dom`
2. Add `BrowserRouter` around the `App` component in `index.tsx`
    * [BrowserRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md)
3. Create hard links in the `ProductItem` component to link to `/products/productName` e.g: `/products/ReadyRoll`
    * [Link in react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)
4. The `<ProductContainer />` component displays details about the selected component. Make the `<ProductContainer>` render **ONLY** when the location changes to a product name. i.e: when the URL is `localhost:3000/products/ReadyRoll`, render `<ProductContainer>`.
    * [Route in react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md)
5. Show the product name given by the URL in the `<ProductContainer>`
    * For `<ProductContainer />` to pick up `/products/:productName`, it's `Props` interface needs a field with the name `productName`
    * [Access Route Params in React Router v4](https://jaketrent.com/post/access-route-params-react-router-v4/)
    * [Using parameters in Route path](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#component)
    * **NOTE**: if you use `this.props.match.params.productName` to get the product name you will have to extend your Props interface to include the `RouteComponentProps`
    ```ts
    import { RouteComponentProps } from 'react-router-dom';

    interface Props extends RouteComponentProps<{ productName: string }> {
    }
    ```
6. Inside `<ProductContainer>` find the correct product from `data.products` and display it using the `<ProductComponent>` component.

## Resources

* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)