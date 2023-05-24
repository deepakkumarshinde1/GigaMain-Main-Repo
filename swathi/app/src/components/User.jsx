import { Component } from "react";

import params from "./params";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>{this.props.param.id}</h1>
      </>
    );
  }
}

export default params(User);
