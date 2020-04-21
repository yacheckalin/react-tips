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
