export const addTodo = payload => ({
  type: "ADD_TODO",
  payload
});

export default function(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
}
