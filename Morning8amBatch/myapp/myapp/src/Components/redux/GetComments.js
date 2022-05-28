import commentAction from "../../Actions/CommentsAction";

const GetComments = () => {
  const getComments = () => {
    commentAction();
  };
  return (
    <div>
      <button onClick={getComments}>Get Comments</button>
    </div>
  );
};
export default GetComments;
