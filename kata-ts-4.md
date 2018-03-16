# React App Kata 4 Typescript

Code for **Kata 4 Typescript** is available in the [app4-ts](app4-ts) folder.

## Learning aims

The idea here is learn how to add a router to our react app.

## Task

You are given an app that lists all redgate products by name.

Write the JavaScript/React code to:

* Navigate to each product page
* Be able to share hard links of any product page

1. Install `react-router-dom`
    * [yarn add](https://yarnpkg.com/lang/en/docs/cli/add/)
2. Add `BrowserRouter` around the `App` component in `index.tsx`
    * [BrowserRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md)
3. Create hard links in the `ProductItem` component to link to `/products/:productName` e.g: `/products/ReadyRoll`
    * [Link in react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)
4. Make the `<ProductContainer>` render **ONLY** when the location changes to a product name. i.e: when the URL is `localhost:3000/products/ReadyRoll`, render `<ProductContainer>`.
    * [Route in react-router-dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md)
    * This will require adding `<Route>`s to `App`
1. Create a new component, `<ProductNameDisplayer>` in it's own file. In the file create:
    * An `interface` called `MatchParams` with a `string` field `productName`
    * An empty `interface` called `ProductNameDisplayerProps` that `extends RouteComponentProps<MatchParams>` (`RouteComponentProps` must be imported from `react-router-dom`)
    * The react component, `ProductNameDisplayer` must `extends Component<ProductNameDisplayerProps, {}>`
    * The `MatchParams` interface lets us access the value of the data matched in the url. This will be passed to the `props` of the component, accessible in `match.params.productName`
5. Show the product name given by the URL in the `<ProductContainer>`
    * [Access Route Params in React Router v4](https://jaketrent.com/post/access-route-params-react-router-v4/)
    * [Using parameters in Route path](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#component)
6. Inside `<ProductContainer>` find the correct product from `data.products` and display it using the `<Product>` component.

## Resources

* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)