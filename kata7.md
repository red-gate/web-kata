# React App Kata 7

Code for **Kata 7** is available in the [app7](app7) folder.

## Learning aims

The idea here is to learn with Redux is useful and how it can help you build a better web application.

## Requirements

* [dotnet core v2.0](https://www.microsoft.com/net/core)

## Get started

You will need **2** terminals

1. Web API server
    * go to `./app7`
    * verify dotnet version `dotnet --version` is higher than `2.0.0`
    * run `dotnet restore`
    * run `dotnet build`
    * run `dotnet run`

    This should build the web api server and serve it at `http:\\localhost:5000`
1. Web app

* in another terminal
* go to `./app7/app/`
* follow the instructions in the [README](README.md#run-the-app).
* your app should be running at port **3000**

## Single source of truth

One of the main reasons Redux can be very usefull in complex application is that you can share the same data across multiple components in a simple way. Without Redux you would have to pass down props all the time and callback in order to update data for every component.

The way Redux helps you with this is that you can define a single source of truth for your data.
The state of your whole application is store in a single object tree within a single store AND hopefuly you are not duplicating data content in many places.

This is called the [single source of truth principle](https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)

## Task

Your goal is to share and display data in multiple components while following the single source of truth principle.

Write the JavaScript/React code to:

1. todo
1. todo

## Resources

* [Redux basics](https://redux.js.org/docs/basics/)