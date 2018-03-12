# React App Kata 1-Typescript

Code for **Kata 1-Typescript** is available in the [app1-ts](app1-ts) folder.

## Learning aims

The idea here is to get an introduction Typescript in the context of React.

* Learn basics of Typescript
* How to create Typescript React components

## Typescript

Typescript introduces static typing to Javascript, similar to that of C#. The code you write in Typescript is compiled down into normal JavaScript upon build.

Here are the important changes Typescript introduces to the code for the Kata.

### Static typing

Variables in Typescript must be given a type. E.g.

```typescript
let age: Number = 25;
```

This applies to functions to;

```typescript
function getAge(): Number {
    return _age;
}

function logAge(): void {
   console.log(_age);
}
```

### Interfaces

You can define interfaces for classes in Typescript. They work similarly to C#;

```typescript
interface Person {
    name: String;
    age: Number;
}
```

You can then create objects that match the interface;

```typescript
let john: Person = { name: 'John' age: 25 } // Typescript transpiler doens't complain because the object matches the interface
```

**Note**: Unlike in C#, it is not necessarily advised to prefix interfaces with `I`, e.g. `IPerson`. [See here.](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#names)

Therefore it is unnecessary to create a `class` for each object that implements an `interface`.

### Enforcing rules

By itself, the Typescript transpiler will accept any valid Javascript or Typescript. The rules are enforced via `tsconfig.json` and `tslint.json`.

Upon running `yarn start`, linting errors will cause the build to fail.

**Note:** You can run `yarn lint` as you develop to see all linting errors as you work:

![linting](/images/yarn-lint-error.png)

## Task

Write the Typescript code to:

1. Show a list of Redgate products in `App.tsx`.
    * Import `.\data.ts` to do this
    * Make a call to `GetData()`
    * You can find the `Product` interface in `Models/Product.ts`
    * [Rendering Multiple Components](https://facebook.github.io/react/docs/lists-and-keys.html#rendering-multiple-components)
1. Check the `console.log` and fix any warning you might have.
1. In `App.tsx` create a `<ProductList />` component to extract the responsibility into a separate component.
1. Pass the array of products as [props](https://facebook.github.io/react/docs/components-and-props.html) into the `ProductList` component
    * You'll need to define a type for the props to be passed in to `ProductList` component. You can find the `Product` interface in `Models/Product.ts`
    * Here is an [example of a stateful component class in TypeScript](https://github.com/piotrwitek/react-redux-typescript-guide#stateful-components---class)
1. Move the `<ProductList />` component into a `ProductList.tsx` and call it from `App.tsx`
1. Create a `<ProductItem />` component inside `ProductList.tsx` file and use it in the `<ProductList />` component.
1. Some of the products are **free** others are **new**. Be sure to show this information in the product list.
1. Add some styles to your app, add your css classes to `App.css` and `Products.css`

## Resources

* [Typescript React component example](https://github.com/piotrwitek/react-redux-typescript-guide#stateful-components---class)