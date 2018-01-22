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

## Task

[Redux](https://redux.js.org) is alredy installed and working in this application. Your goal is to switch the app code into using Redux.

Let's go through some [basic concepts](https://redux.js.org/docs/basics/) before we start.

1. actions

    [Actions](https://redux.js.org/docs/basics/Actions.html) are sets of information that is sent to your application.
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

1. reducers

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

1. the store

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

    To do this we inject in our `src/index.js` the store using `Provider` component. For more information see: [Passing the Store](https://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store)

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

1. use the state in our components

    here is the versions example:

    * define a `fetchWebServerVersion` function in `/src/modules/versions.js`

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

    * import fetch function and connect state to props

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

    * use the version data in our component

        ```jsx
        <div className='App-header'>
            <h2>Kata 6 - Redux</h2>
            <pre>v{this.props.version}</pre>
        </div>
        ```
1. The versions example

    the versions example gives
Write the JavaScript/React code to:

1. todo
1. todo
1. todo

## Resources
