import React from "react";

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
