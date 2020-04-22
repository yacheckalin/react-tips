#### Table of Contents

- [Avoid Reconciliation](#avoid-reconciliation)

#### Avoid Reconciliation

> When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

> You can override the lifecycle method <strong>shouldComponentUpdate</strong> and return <strong>false</strong>. In that case the entire rendering process.

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
