# React App Kata 1 Typescript

Code for **Kata 1 Typescript** is available in the [app-ts-1](app-ts-1) folder.

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

**Note:** You can run `yarn lint` as you develop to see all linting errors as you work

## Task

1. Run `yarn start` to see the webpage in the browser
1. Inspect the console to find and fix any errors or warnings
1. Show a list of Redgate products in `App.tsx`.
    * Import `.\data.ts`
    * Make a call to the `GetData()` method exported from `data.ts`
    * Display a list of the products in `App.tsx` ([Rendering Multiple Components](https://facebook.github.io/react/docs/lists-and-keys.html#rendering-multiple-components))
1. Next, in `App.tsx` create a `<ProductList />` component to extract the responsibility into a separate component.
    * The array of products needs to be passed as [props](https://facebook.github.io/react/docs/components-and-props.html)
    * Becasue we're in Typescript, you'll need to define a type for the props to be passed in to `ProductList` component. The type, `Product`, is provided as an interface in `Models/Product.ts`
    * The definition of the component should therefore be something like `export class ProductList extends React.Component<Product, {}>`
    * The second item in `<Product, {}>` is the state -- we aren't using state yet, so this is the empty object
    * [More information](https://github.com/piotrwitek/react-redux-typescript-guide#stateful-components---class)
1. Move the `<ProductList />` component into a `ProductList.tsx` and call it from `App.tsx`
1. Create a `<ProductItem />` component inside `ProductList.tsx` file and use it in the `<ProductList />` component.
    * This should be used to display information about each individual item. Think of the `props` you might need for this component
1. Some of the products are **free** others are **new**. Be sure to show this information in `<ProductList />` or `<ProductItem />`.
1. Add some styles to your app, add your css classes to `App.css` and `Products.css`