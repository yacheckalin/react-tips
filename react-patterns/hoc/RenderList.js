import React, { Component } from "react";
import axios from "axios";

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
