export const ReusuableTableComponent = ({headers, data, keys}) => {
  return (
    <>
      <table border="1px solid">
        <thead>
          {data.length > 0 &&
            headers.map((header, i) => {
              return <th key={i}>{header}</th>;
            })}
        </thead>
        <tbody>
          {data.map((obj, i) => {
            return (
              <tr>
                {keys.map((key) => {
                  return <td>{obj[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
