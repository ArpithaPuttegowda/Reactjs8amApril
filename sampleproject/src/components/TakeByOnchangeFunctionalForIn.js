import React from "react";

const TakeDataByOnchangeFunctionalForIn = () => {
  let data = {};
  let sum = [];
  const [result, setResult] = React.useState(0);
  const handleChange = (eve) => {
    let id = eve.target.id;
    let val = eve.target.value;
    data = {...data, [id]: val};
  };
  const handleClick = () => {
    for (let v in data) {
      sum.push(data[v]);
    }
    let s = sum.reduce((v1, v2) => {
      return parseInt(v1) + parseInt(v2);
    });
    setResult(s);
  };
  return (
    <div>
      <p>
        <b>N1:</b>
        <input id="n1" onChange={(e) => handleChange(e)} />
      </p>
      <p>
        <b>N2:</b>
        <input id="n2" onChange={handleChange} />
      </p>
      <p>
        <b>N3:</b>
        <input id="n3" onChange={handleChange} />
      </p>
      <p>
        <input type="button" value="Sum" onClick={handleClick} />
      </p>
      <h1>Sum:{result}</h1>
    </div>
  );
};

export default TakeDataByOnchangeFunctionalForIn;
