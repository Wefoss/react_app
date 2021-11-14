import { Component } from "react";
import styles from "./Link.module.css";

class SayHi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }

  hideBtn = () => {
    const { isHi } = this.state;
    this.setState({
      isHi: !isHi,
    });
  }

  render() {
    const { isHi } = this.state;
    const { name } = this.props;
    return (
      <>
        <p>{`${isHi ? "Hello" : "Bay"} ${name}`}</p>
        {isHi && <button onClick={this.hideBtn}>Say hi</button>}
      </>
    );
  }
}

export default SayHi;
