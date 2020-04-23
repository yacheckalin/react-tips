#### Table of Contents

- [Avoid Reconciliation](#avoid-reconciliation)
- [Virtualize Long Lists](#virtualize-long-lists)
- [Server Side Rendering (SSR)](#server-side-rendering)
- [Using a CDN](#using-a-cdn)
- [Use CSS Animation Instead of JavaScript Animation](#use-css-animation-instead-of-javascript-animation)
- [Use Memoization](#use-memoization)
- [Avoid Additional HTML Element Wrappers](#avoid-additional-html-element-wrappers)
- [Dependency optimization](#dependency-optimization-with-webpack)
- [Use the production build](#use-the-production-build)
- [Performance optimization using webpack](#performance-optimization-using-webpack)
- [Using Lazy Loading Components](#using-lazy-loading-components)
- [Throttling and Debouncing Events](#throttling-and-debouncing-events)
- [Avoid Using Inline Style Attribute](#avoid-using-inline-style-attribute)
- [Optimize Conditional Rendering](#optimize-conditional-rendering)
- [Use Web Workers for CPU Extensive Tasks](#use-web-workers-for-cpu-extensive-tasks)

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

#### Avoid Additional HTML Element Wrappers

> The [React.Fragment](https://reactjs.org/docs/react-api.html#reactfragment) component lets you return miltiple elements in a render() method without creating an additional DOM element.

```javascript
const UserInfo = ({ name, surname, email }) => (
  <React.Fragment>
    <div>{name}</div>
    <div>{surname}</div>
    <div>{email}</div>
  </React.Fragment>
);
```

> or short syntax <> ... </>

```javascript
const UserInfo = ({ name, surname, email }) => (
  <>
    <div>{name}</div>
    <div>{surname}</div>
    <div>{email}</div>
  </>
);
```

> Fragment syntax is only supported by Babel v7.0.0-beta.31 & above

> Also there is a trick how you can ommit using React.Fragment for return miltiple elements in a render.

```javascript
const UserInfo = ({ name, surname, email }) => ([
    <div>{name}</div>,
    <div>{surname}</div>,
    <div>{email}</div>
)];
```

#### Dependency optimization with webpack

Here is the list of extensive [dependencies](https://github.com/GoogleChromeLabs/webpack-libs-optimizations) which you can optimize.

> - react
> - react-router
> - lodash
> - styled-components
> - moment
> - babel-polyfill
> - etc...

#### Use the production build

> If you use production build that will minify many files and exclude warnings (development-only code).

> For <strong>webpack</strong> you can use

```javascript
webpack --mode=production
```

> or

```javascript
module.exports = { mode: "production" };
```

[More details here](https://reactjs.org/docs/optimizing-performance.html)

#### Performance optimization using webpack

If you are using webpack there are several trick you can use to optimize performance of you bundle file.

> - minimize the bundle usign the TerserPlugin
> - use <b>SplitChunksPlugin</b> for dynamically improted modules
> - use <b>namedModules</b>
> - remove empty chunks
> - recognise the <b>sideEffects</b> flag in package.json
> - use <strong>CommonsChunkPlugin</strong>

- [More technics here](https://webpack.js.org/configuration/optimization/)
- [Code spliting webpack](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)

#### Using Lazy Loading Components

> Loading bundle files on runtime reduces the size of the initial bundle.

> <strong>React.lazy</strong> lets render a dynamic import as a regular component

```javascript
const SomeComponent = React.lazy(() => import("./SomeComponent"));
```

> The lazy component should then be rendered inside a <strong>Suspense</strong> component, which allows to show some fallback content till waiting for lazy component to load.

```javascript
import React, { Suspense } from "react";
import SomeComponent from "./SomeComponent";

const SuspenseComponent = () => (
  <Supsense fallback={<div>Loading ... </div>}>
    <SomeCompontn />
  </Suspense>
);
```

> Aren't available yet for server-side rendering (SSR).

[More details here](https://reactjs.org/docs/code-splitting.html#reactlazy)

#### Throttling and Debouncing Events

Events have a different rate of triggering the event handler. The idea is to identify the event handler that is doing the expensive work and implement throttling and debouncing techniques.

> Throttling means delaying function execution.

> Debouncing is a technique to prevent the event trigger from being fired too often. For example, infinite scroll or infinite fetching when the user scroll to the bottom of the page.

```javascript
import debounce from "lodash.debounce";
import React, { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const search = debounce((q) => {
    setQuery(q);

    // API call here
  }, 1000);
  return (
    <input
      type="text"
      value={query}
      className="search"
      onChnage={(e) => search(e)}
    />
  );
};
```

- [throttle-debounce](https://www.npmjs.com/package/throttle-debounce)
- [lodash.debounce](https://lodash.com/docs#debounce)

#### Avoid Using Inline Style Attribute

When you use inline style, the browser has to map all the style rules passed to the actual CSS properties, which increases the rendering time for the component.

> Avoid usiing inline styles added as a JavaScript object instead of style tags.

> Better to import the CSS file into the component or use styled-component library.

```javascript
const Message = (props) => (
  <div style={{ backgroundColor: "green" }}>{props.message}</div>
);
```

#### Optimize Conditional Rendering

> Never have multiple return statements in your render method

> Either use <strong>embedded JSX expressions</strong> or a <strong>variable assignment</strong> and you'll gain substantial optimization.

```javascript
const Layout = () => {
  const [showHeader, setShowHeader] = useState(false);
  const Header = showHeader ? <Header /> : null;
  ...
  return (
    <div>
      {Header}
      <Sidebar />
      <Footer />
    </div>
  );
};
```

> or

```javascript
const Layout = () => {
  const [showHeader, setShowHeader] = useState(false);
  ...
  return (
    <div>
      {showHeader && <Header />}
      <Sidebar />
      <Footer />
    </div>
  );
};
```

[More details here](https://medium.com/@cowi4030/optimizing-conditional-rendering-in-react-3fee6b197a20)

#### Use Web Workers for CPU Extensive Tasks
