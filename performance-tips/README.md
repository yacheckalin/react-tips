#### Table of Contents

- [Avoid Reconciliation](#avoid-reconciliation)
- [Virtualize Long Lists](#virtualize-long-lists)
- [Server Side Rendering (SSR)](#server-side-rendering)

#### Avoid Reconciliation

> When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

> You can override the lifecycle method <strong>shouldComponentUpdate</strong> and return <strong>false</strong>. In that case the entire rendering process will not update the DOM.

```javascript
shouldComponentUpdate(nextProps, nextState) {return false;}
```

> The same effect if you inherit your component from <strong>React.PureComponent</strong> instead of <strong>React.Component</strong>

```javascript
class Button extends React.PureComponent {}
```

> or use Higher-Order Component React.memo() for function components

```javascript
const Button = React.memo((props) => <button>{props}</button>);
```

All solutions above will only shallowly compare complex object in the props object.

> Also remember that using Render Prop will break shallow comparison because it call a prop function inside render method.

> The same assumption for HOC function invoked inside the render method.

- [React.memo details](https://reactjs.org/docs/react-api.html#reactmemo)
- [Avoid Reconciliation details](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)
- [Render Props with React.PureComponent](https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent)
- [Don't Use HOCs inside the render Method](https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method)

#### Virtualize Long Lists

> If your application renders long lists of data(hundreds or thousands of rows), we recommended using a technique known as 'windowing'. The technique only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created.

> > [react-window](https://github.com/bvaughn/react-window)

> > [react-virtualized](https://github.com/bvaughn/react-virtualized)

#### Server Side Rendering

Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client.

SSR provides performance benefit and consistent SEO performance.

> When the browser requests a page, the server loads React in the memory and fetches the data required to render the app. After that, the server sends generated HTML to the browser, which is immediately shown to the user.

- [Next.js](https://nextjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)

[More SSR details here](https://medium.com/@swazza85/ssr-with-react-9cb197cfe380)
