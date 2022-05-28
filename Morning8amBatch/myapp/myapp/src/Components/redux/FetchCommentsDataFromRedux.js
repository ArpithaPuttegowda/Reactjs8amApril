import React, {Component} from "react";
import store from "../../store/store";

class FetchCommentsDataFromRedux extends Component {
  state = {
    comments: []
  };
  handleComments = () => {
    let state = store.getState();
    const comments = state.r.comments;
    console.log(comments, "comments inside the component");
    this.setState({
      comments: comments
    });
  };
  render() {
    return (
      <div>
        FetchCommentsDataFromRedux
        <button onClick={this.handleComments}>Fetch</button>
        <ol>
          {this.state.comments.map((obj) => {
            return <li>{obj.name}</li>;
          })}
        </ol>
      </div>
    );
  }
}
export default FetchCommentsDataFromRedux;
