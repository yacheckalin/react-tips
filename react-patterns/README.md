#### Controlled Components

> An input form element whose value is controlled by React(state) is called a 'controlled component'.
> It only updates the DOM when state has changed in the Component.

```javascript

class SomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {value, name} = e.target;
    this.setState({[name]:value});
  }

  render() {
    return (
      <form>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}>
      </form>
    )
  }

}

```

[Sample of Controlled Component Here](https://github.com/yacheckalin/react-tips/tree/master/react-patterns/controlled-component/SearchForm.js)

#### State hoisting

To change the state in a Parent component from the Child component, you can pass a callback from a Parent.

```javascript
class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = { parentProperty: "" };
  }
  render() {
    return (
      <ChildComponent
        onChange={(value) => this.setState({ parentProperty: value })}
      />
    );
  }
}

const ChildComponent = ({ onChange }) => (
  <input onChange={(e) => onChange(e.target.value)} />
);
```

[Sample of State Hoisting Here](https://github.com/yacheckalin/react-tips/tree/master/react-patterns/state-hoisting/Clicker.js)
