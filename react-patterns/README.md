#### Container Component

> A container does data fetching and then renders its corresponding sub-component. - Jason Bonta

```javascript
class UserContainer extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }
  render() {
    return <UsersList data={this.state.data} />;
  }
}

const UsersList = ({ data }) => (
  <ul className="collection">
    {data.map((user) => (
      <li key={user.id} className="collection-item">
        <span>{user.id}</span> {user.name}
        <span className="secondary-content">{user.email}</span>
      </li>
    ))}
  </ul>
);
```

[Sample of Container Component Here](https://github.com/yacheckalin/react-tips/tree/master/react-patterns/container-component/UserContainer.js)

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

To change the state in a Parent Component from the Child Component, you can pass a callback from a Parent.

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

#### Layout Component

```javascript
const NavigationBar = (searchForm, navigation) => (
  <nav>
    <div>{navigation}</div>
    <div>{searchForm}</div>
  </nav>
);

<NavigationBar
  searchForm={<SearchFormComponent />}
  navigation={<NavigationListComponent />}
/>;
```

[Sample of Layout Component Here](https://github.com/yacheckalin/react-tips/tree/master/react-patterns/layout-component/NavigationLayout.js)
