#### Use Capitalize Component Names

In JSX, a component that starts with a lowercase letter is assumed to be a built-in HTML or SVG element

> use this syntax

```javascript
const Intro = () => <div>Intro</div>;
```

> instead of this

```javascript
const intro = () => <div>Intro</div>;
```

#### Close Every Element

JSX requires that every elemnt be closed

> use this syntax

```javascript
const Message = () => (
  <>
    <img src="..." />
    <p>Message here</p>
  </>
);
```

> instead of

```javascript
const Message = () => <>
  <img src='...'>
  <p>Message here ...</p>
</img>
```

#### Use curly braces to embed expressions in JSX

```javascript
const Button = () => {
  const name = "Save";

  return <button>{name}</button>;
};
```

#### Use default values for props with defaultProps

```javascript
const Section = (props) => <div>{props.context}</div>;

Element.defaultProps = {
  context: "Some text here",
};
```

#### Collect props with rest parameter syntax

You can pass DOM attributes to Element

```javascript
const Element = ({ id, ...restProps }) => (
  <div {...restProps}>Element id is {id}</div>
);

<Element id="id-1" className="formElement" name="Element" />;
```

#### Avoid undefined values in spreaded attributes

```javascript
const CustomInput = ({ className = "", ...props }) => (
  <input className={className} {...props} />
);
```

#### Conditional rendering in JSX

> IF

```javascript
{
  condition && <div>Render only IF 'condition' is TRUE</div>;
}
```

> UNLESS

```javascript
{
  condition || <div>Render only WHEN 'condition' is FALSE </div>;
}
```

> IF-ELSE

```javascript
{
  condition ? (
    <div>Render only IF 'condition' is TRUE</div>
  ) : (
    <div>Render only IF 'condition' is FALSE</div>
  );
}
```

#### Render children types (String, Array)

> String

```javascript
<div>Hello there!</div>
```

> Array

```javascript
<div>
  ['Hello', <span>there</span>, '!']
</div>
```

#### Render list of elements

```javascript
<ul>
  {["one", "two", "three"].map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>
```

#### Use React.Children.only method

```javascript
return React.Children.only(props.children);
```
