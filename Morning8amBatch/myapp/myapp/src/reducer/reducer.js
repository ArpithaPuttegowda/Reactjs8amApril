import init from "../init/init";
const reducer = (state = init, action) => {
  debugger;
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.payload
    };
  }
  if (action.type === "LOC") {
    state = {
      ...state,
      loc: action.payload
    };
  }
  if (action.type === "AJAX") {
    state = {
      ...state,
      data: action.data
    };
  }
  if (action.type === "COMMENTS") {
    state = {
      ...state,
      comments: action.payload
    };
  }
  console.log(state, "state");
  return state;
};
export default reducer;
