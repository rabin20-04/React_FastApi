# For semantic coding

- To define routes, create a file named `routes.js` and make each route a variable. Then, export all these variables and use them anywhere. This will help avoid a lot of mistakes.
- You can create a JavaScript file for keys and other values used in multiple components, such as home, address, and contact icons.

```js
// ------for loop for similar icons
const var=[
    {
        route:HOME_ROUTE,
        label:"Home",

    },{
        route:ABOUT_ROUTE,
        label:"About",

    },
]
//--------------------------
// for easy route setting
// in another file
// const HOME_ROUTE = "/";
// const ABOUT_ROUTE = "/about";
```
