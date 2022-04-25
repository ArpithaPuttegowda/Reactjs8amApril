const ListKeys1 = () => {
  const colors = ["red", "orange", "pink"];
  return (
    <div>
      <ul>
        {colors.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListKeys1;
