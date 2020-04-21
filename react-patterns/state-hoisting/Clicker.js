import React from "react";

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = { clicked: 0 };
  }

  handleClick = (e) => {
    this.setState((state) => (this.state.clicked = state.clicked + 1));
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClick}
          name="Clicker"
          className="btn btn-large waves-effect waves-light"
        />
        <p>You clicked : {this.state.clicked} times!</p>
      </div>
    );
  }
}

const Button = ({ onClick, name, className = "btn" }) => (
  <a className={className} onClick={(e) => onClick(e.target)}>
    {name}
  </a>
);

export default Clicker;
