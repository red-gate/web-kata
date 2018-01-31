# React App Kata 6

Code for **Kata 6** is available in the [app6](app6) folder.

## Learning aims

The idea here is to start using Redux for our app and understand it's main concepts.

## Requirements

* [dotnet core v2.0](https://www.microsoft.com/net/core)

## Get started

You will need **2** terminals

1. Web API server
    * go to `./app6`
    * verify dotnet version `dotnet --version` is higher than `2.0.0`
    * run `dotnet restore`
    * run `dotnet build`
    * run `dotnet run`

    This should build the web api server and serve it at `http:\\localhost:5000`
1. Web app

* in another terminal
* go to `./app6/app/`
* follow the instructions in the [README](README.md#run-the-app).
* your app should be running at port **3000**

## Concepts

Let's go through some [basic concepts](https://redux.js.org/docs/basics/) before we start. We have added a simple end to end React Redux example in the code of `App6` that we will explain first.

1. Actions

    [Actions](https://redux.js.org/docs/basics/Actions.html) are sets of information that are sent to your application.
    An action has a `type` (mandatory) and a `payload` (optional).

    Example of an action with no payload fired:

    ```jsx
    dispatch({ type: WEB_SERVER_VERSION_REQUESTED })
    ```

    Example of an action with payload fired:

    ```jsx
    dispatch({
        type: WEB_SERVER_VERSION_COMPLETED,
        payload: { version: json }
    })
    ```

1. Reducers

    [Reducers](https://redux.js.org/docs/basics/Reducers.html) define how the state of our app should change with respect to actions that are fired.

    All of our reducers are combined in `/src/modules/index.js`

    ```jsx
    import { combineReducers } from 'redux'
    import { routerReducer } from 'react-router-redux'

    import versions from './versions'

    export default combineReducers({
        routing: routerReducer,
        versions
    })
    ```

    Our `versions` reducer shows examples of how the state of our app changed based on the actions that are fired:

    `/src/modules/versions.js`

    ```jsx
    export const WEB_SERVER_VERSION_REQUESTED = 'versions/WEB_SERVER_VERSION_REQUESTED'
    export const WEB_SERVER_VERSION_COMPLETED = 'versions/WEB_SERVER_VERSION_COMPLETED'

    const initialState = {
        inProgress: false,
        version: null,
    }

    export default (state = initialState, action) => {
        switch (action.type) {
            case WEB_SERVER_VERSION_REQUESTED:
            return {
                ...state,
                inProgress: true
            }
            case WEB_SERVER_VERSION_COMPLETED:
            return {
                ...state,
                inProgress: false,
                version: action.payload.version
            }
            default:
            return state
        }
    }
    ```

1. Store

    The [store](https://redux.js.org/docs/api/Store.html) contains all the state of your application.

    Ours is defined at `/src/store.js`

    ```jsx
    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancers
    )

    export default store
    ```

    It already uses a `rootReducer` where our app defines the reducers it needs under `/src/modules/index.js`

    ```jsx
    import rootReducer from './modules'
    ```

1. give access to the store to all components

    To do this we inject in our `src/index.js` the `store` using the `Provider` component. For more information see: [Passing the Store](https://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)

    ```jsx
    import React from 'react'
    import ReactDOM from 'react-dom'
    import { Provider } from 'react-redux'
    import { ConnectedRouter } from 'react-router-redux'
    import store, { history } from './store'

    import './index.css'
    import App from './App'

    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <App />
                </div>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
    ```

1. create a dispatch function for fetching versions

    * we define a `fetchWebServerVersion` function in `/src/modules/versions.js`

        ```jsx
        export const fetchWebServerVersion = () => {
            return dispatch => {
                dispatch({ type: WEB_SERVER_VERSION_REQUESTED })
                const url = '/api/versions/get'
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin'
                }).then(response => {
                    return response.json()
                }).then(json => {
                    dispatch({
                        type: WEB_SERVER_VERSION_COMPLETED,
                        payload: { version: json }
                    })
                })
            }
        }
        ```

        This to notice here:

        * `fetchWebServerVersion` function returns a `dispatch` function
        * we dispatch `WEB_SERVER_VERSION_REQUESTED` action before the fetch call
        * we dispatch `WEB_SERVER_VERSION_COMPLETED` action when the fetch call completes

1. Connect your dispatch function and the data present in the store to the `App` component
    * we import fetch function and connect state to props

        ```jsx
        import { bindActionCreators } from 'redux'
        import { connect } from 'react-redux'
        import { withRouter } from 'react-router'

        import { fetchWebServerVersion } from './modules/versions'
        const mapStateToProps = state => ({
            version: state.versions.version
        })

        const mapDispatchToProps = dispatch => bindActionCreators({
            fetchWebServerVersion
        }, dispatch)

        export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
        ```

        __Remark 1__: Notice the line `version: state.versions.version` where we connect the data from the store as a property of the component so that it can be used as `this.props.version` directly.

        __Remark 2__: Notice the mapDispatchToProps, where we add the `fetchWebServerVersion` function. So that we can call `this.props.fetchWebServerVersion` and that all calls with `dispatch` for example `dispatch({ type: WEB_SERVER_VERSION_REQUESTED })` get properly fired.

    * use the version data present in the `store` in our `App` component

        ```jsx
        <div className='App-header'>
            <h2>Kata 6 - Redux</h2>
            <pre>v{this.props.version}</pre>
        </div>
        ```
1. The versions example

    throuout the Redux concepts with showed how the versions request example work in this app. Have a look at the different pieces to understand how they work:
    * `src/index.js`
    * `src/App.js`
    * `src/store.js`
    * `src/modules/versions.js`
    * `src/modules/index.js`

## Task

[Redux](https://redux.js.org) is alredy installed and working in this application. Your goal is to switch the app code into using Redux.

Write the JavaScript/React code to avoid any use of `state` in the `App.js` component. Use redux instead

1. move all api calls into the `products` reducer
    1. create a `products.js` reducer under `src/modules` and connect it to the store.
    1. create the action types for products
        1. `products/PRODUCTS_REQUESTED`
        1. `products/PRODUCTS_COMPLETED`
        1. `products/PRODUCT_REMOVE_REQUESTED`
        1. `products/PRODUCT_REMOVE_COMPLETED`
        1. `products/PRODUCT_ADD_REQUESTED`
        1. `products/PRODUCT_REMOVE_COMPLETED`
    1. create all api functions
        1. `fetchProducts`
        1. `addProduct`
        1. `removeProduct`
    1. be sure each function dispatches a `requested` action before calling the server
    1. be sure each function dispatches a `completed` action when your request succeeds
1. update the products reducer so that the data of the products list is updated acordingly
    1. define an initial state
    1. create a case for each action type
1. import all dispatch product functions into `App.js`
    1. be sure to map them to props in the `mapDispatchToProps` section
1. use the products data from the store
    1. be sure to map the products data in the `mapStateToProps` section
1. update your `App.js` code so that you don't use `this.state` anymore. You shoul be using `this.props` instead
1. check in the browser console that all actions are being fired

## Resources

* [Redux basics](https://redux.js.org/docs/basics/)