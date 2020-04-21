#### Higher-Order Components (HOC)

> A higher-order component is a function that takes a component and returns a new component

> HOC composes the original component by wrapping it in a container component

> A HOC is a pure function with zero side-effects

> Do not use in the render method of a component

> Refs are not passed through

```javascript
export default function RenderUserList(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
    }
    async componentDidMount() {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users "
      );
      this.setState({ data });
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

export const UserList = ({ data }) => (
  <ul className="collection">
    {data.map((item) => (
      <li key={item.id} className="collection-item">
        {item.name}
      </li>
    ))}
  </ul>
);
```

```javascript
const Users = RenderUserList(UserList);
```

[Sample of HOC Here](https://github.com/yacheckalin/react-tips/tree/master/react-patterns/hoc/RenderList.js)

#### Render Props

> The term 'render prop' refers to a technique for sharing code between React components using a prop whose value is a function

> Any prop that is a function that a component uses to know what to render is technically a 'render prop'

> The concept of <strong>children as a function</strong>, <strong>child as a function</strong> also called render prop.

```javascript
const Card = (props) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>{props.children()}</p>
        </div>
      </div>
    </div>
  </div>
);

const Message = () => (
  <div>
    <Card>
      {() => (
        <>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </>
      )}
    </Card>
  </div>
);

export default Message;
```

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

#### Proxy Component

Use high level component to proxy props to a lower-level component

```javascript
const Button = (props) => (
  <button type="button" {...props}>
    {props.children}
  </button>
);

<Button className="btn">Load</Button>;
```

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
