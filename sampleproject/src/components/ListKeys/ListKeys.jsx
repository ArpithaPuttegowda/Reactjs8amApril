import "./ListKeys.css";
import React from "react";

function template() {
  const data = ["Sachin", "Dhoni", "Kohli", "Panth"]
  return <p>
    {
      data.map((v, i) => {
        return <p key={i + v}>{v}</p>
      })
    }
  </p>
}

export default template;
