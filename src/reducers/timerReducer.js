export const startTimer = payload => ({
  type: "START_TIMER",
  payload
});

export default function(state = {}, action) {
  switch (action.type) {
    case "START_TIMER":
      return { ...action.payload };
    default:
      return state;
  }
}
