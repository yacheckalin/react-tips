#### Table of Contents

- [Avoid Reconciliation](#avoid-reconciliation)
- [Virtualize Long Lists](#virtualize-long-lists)
- [Server Side Rendering (SSR)](#server-side-rendering)
- [Using a CDN](#using-a-cdn)
- [Use CSS Animation Instead of JavaScript Animation](#use-css-animation-instead-of-javascript-animation)
- [Use Memoization](#use-memoization)

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

#### Using a CDN

A CDN is one of possible ways to deliver static content from a website or mobile application to the browser more quickly and efficiently.

It is beneficial to use CDN's for the following reasons:

> High capacity infrastructure

> Files have been cached

> Different domains

> Depends on user geographic location

- Google Cloud CDN
- Cloudflare
- Akamai
- Incapsula
- MaxCDN
- AWS CloudFront
- CacheFly
- KeyCDN

#### Use CSS Animation Instead of JavaScript Animation

You can create animation by using

- css transition
- css animation
- javascript

> Broken CSS rules and styles do not lead to errors of broken web pages, which is not the case with JavaScript.

> CSS is quite cheap to interpret as it’s declarative. We can parallelize the creation of in-memory representation of style and we can defer the calculation of style properties until the elements are painted.

> The cost of loading a JavaScript library for animation is relatively high, consuming the network bandwidth as well as computation time.

> Even though JavaScript can provide a lot more optimization than CSS, even an optimized JavaScript code can lock the UI and lead to failure of the web browser.

#### Use Memoization

Memoized function faster because if the function is called with the same values as the previous one then instead of executing function logic it would fetch the result from cache.

> You can memoize in several ways
>
> - use one of the following memoize libraries (<strong>moize, memoize-one, lodash.memoize, memoizee, etc ...</strong>)
> - use <strong>React.memo()</strong> for function components
> - use <strong>useCallback()</strong> React.hook
> - use <strong>useMemo()</strong> React.hook
> - use higher-order component(HOC) from <strong>recompose/pure</strong>
> - use <strong>reselect</strong> in redux

> > <b>useCallback(fn, deps)</b> is equivalent to <b>useMemo(() => fn, deps)</b>

```javascript
import pure from "recompose/pure";

const Comment = ({ comment, author, createdAt }) => (
  <div className="comment-detail">
    <p>{comment}</p>
    <p>
      <span>{author}</span>
      <span>{createdAt}</span>
    </p>
  </div>
);

export default pure(Comment);
```

> is the same as

```javascript
const Comment = React.memo(({ comment, author, createdAt }) => (
  <div className="comment-detail">
    <p>{comment}</p>
    <p>
      <span>{author}</span>
      <span>{createdAt}</span>
    </p>
  </div>
));
export default Comment;
```

> or

```javascript
import moize from "moize";

const Comment = ({ comment, author, createdAt }) => (
  <div className="comment-detail">
    <p>{comment}</p>
    <p>
      <span>{author}</span>
      <span>{createdAt}</span>
    </p>
  </div>
);

export default moize(Comment, { isReact: true });
```
