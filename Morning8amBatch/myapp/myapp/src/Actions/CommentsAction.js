import ServerCallService from "../ServerCall/SercallService";
import store from "../store/store";

const commentAction = async () => {
  let res = await ServerCallService.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  store.dispatch({
    type: "COMMENTS",
    payload: res
  });
  console.log(res, "comments");
};

export default commentAction;
