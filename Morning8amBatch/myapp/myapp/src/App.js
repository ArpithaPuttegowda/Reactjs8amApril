// import {Component} from "react";
// import A from "./Components/A";
// import B from "./Components/B";
// import C from "./Components/C";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       loc: ""
//     };
//   }
//   callback = (data) => {
//     this.setState({
//       name: data
//     });
//   };
//   callback2 = (data) => {
//     this.setState({
//       loc: data
//     });
//   };
//   render() {
//     return (
//       <div>
//         <A cb={this.callback} />
//         <B cb={this.callback2} />
//         <C name={this.state.name} loc={this.state.loc} />
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from "react";
import A from "./Components/redux/A";
import Ajax from "./Components/redux/Ajax";
import B from "./Components/redux/B";
import C from "./Components/redux/C";
import D from "./Components/redux/D";
import FetchCommentsDataFromRedux from "./Components/redux/FetchCommentsDataFromRedux";
import GetComments from "./Components/redux/GetComments";
import GetDataNew from "./Components/redux/GetData";

class App extends Component {
  render() {
    return (
      <div>
        {/* <A />
        <B />
        <C />
        <D />
        <Ajax />
        <GetDataNew /> */}
        <GetComments />
        <FetchCommentsDataFromRedux />
      </div>
    );
  }
}
export default App;
