import React from "react";
import axios from "axios";

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
  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ data });
  }
  render() {
    return <UsersList data={this.state.data} />;
  }
}

export default UserContainer;
