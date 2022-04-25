function ListKeys2() {
  const country = ["India", "Pak", "China", "US"];
  return (
    <div>
      <select>
        {country.map((v, i) => {
          return <option key={i}>{v}</option>;
        })}
      </select>
    </div>
  );
}
export default ListKeys2;
