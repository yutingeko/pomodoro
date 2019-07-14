import uuid from "uuid/v4";
export const addTodo = payload => ({
  type: "ADD_TODO",
  payload
});

export const completeTodo = payload => ({
  type: "COMPLETE_TODO",
  payload
});

export const moveToFirst = payload => ({
  type: "MOVE_TO_FIRST",
  payload
});

export default function(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuid(),
          todo: action.payload,
          completed: false
        }
      ];
    case "COMPLETE_TODO":
      return state.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
    case "MOVE_TO_FIRST":
      return [
        ...state.filter(item => item.id === action.payload),
        ...state.filter(item => item.id !== action.payload)
      ];
    default:
      return state;
  }
}
