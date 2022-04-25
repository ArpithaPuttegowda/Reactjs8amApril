import {createRef, useRef, useState} from "react";
const GetSum = () => {
  const inputRef1 = createRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const [name, setName] = useState("Sachin");
  const [result, setResult] = useState(0);

  const handleSum = () => {
    let n1 = inputRef1.current.value;
    let n2 = inputRef2.current.value;
    let n3 = inputRef3.current.value;
    let sum = Number(n1) + Number(n2) + Number(n3);
    setResult(sum);
    setName("DHONI");
  };
  return (
    <div>
      <p>
        <b>N1:</b>
        <input ref={inputRef1} />
      </p>
      <p>
        <b>N2:</b>
        <input ref={inputRef2} />
      </p>
      <p>
        <b>N3:</b>
        <input ref={inputRef3} />
      </p>
      <p>
        <input type="button" value="Sum" onClick={handleSum} />
      </p>
      <h1>Sum:{result}</h1>
      <h1>Name:{name}</h1>
    </div>
  );
};
export default GetSum;
