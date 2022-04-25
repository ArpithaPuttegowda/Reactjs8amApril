export const ListKeys3 = () => {
  const headers = ["Name", "Location", "Run"];
  const data = [
    {name: "Sachin", loc: "Mumbai", runs: 10},
    {name: "Dhoni", loc: "Ranchi", runs: 10},
    {name: "Kohli", loc: "Delhi", runs: 10}
  ];
  return (
    <h1>
      <table border="1px solid black">
        <thead>
          <tr>
            {headers.map((v, i) => {
              return <th key={i}>{v}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => {
            return (
              <tr key={i}>
                <td>{obj.name}</td>
                <td>{obj.loc}</td>
                <td>{obj.runs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </h1>
  );
};
