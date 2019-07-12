export const startTimer = payload => ({
  type: "START_TIMER",
  payload
});

export default function(state = {}, action) {
  const { duration, flag } = action.payload || {};
  switch (action.type) {
    case "START_TIMER":
      return { duration, flag };
    default:
      return state;
  }
}
