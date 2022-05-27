import {connect} from "react-redux";
const GetData = ({d}) => {
  return (
    <div>
      <h1>It's a GetData Component</h1>
      {d.map((obj) => {
        return <h1>{obj.title}</h1>;
      })}
    </div>
  );
};
const msp = (state) => {
  return {
    d: state.r.data
  };
};
const GetDataNew = connect(msp)(GetData);
export default GetDataNew;
