import React from "react";

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

export default UserContainer;
