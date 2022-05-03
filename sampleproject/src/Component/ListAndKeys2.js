const ListKeys2 = () => {
  const playerInf = [
    {name: "sachin", loc: "Mumbai"},
    {name: "dhoni", loc: "ranchi"},
    {name: "kohli", loc: "delhi"}
  ];
  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            <th>Name</th>
            <th>Loc</th>
          </tr>
        </thead>
        <tbody>
          {playerInf.map((obj) => {
            return (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.loc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ListKeys2;
