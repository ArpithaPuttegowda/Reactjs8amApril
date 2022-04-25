import React, {forwardRef} from "react";

class ForwardRef extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef(null);
    this.myRef2 = React.createRef(null);
  }
  handleClick = () => {
    this.myRef.current.value = "SACHIN";
    this.myRef2.current.value = "a";
  };
  render() {
    return (
      <div>
        <Child ref={this.myRef} name="ST" loc="Mumbai" r={this.myRef2} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} />
      <input ref={props.r} />
      <h1>{props.name}</h1>
      <h1>{props.loc}</h1>
    </div>
  );
});
export default ForwardRef;
