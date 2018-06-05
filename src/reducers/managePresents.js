export function managePresents(state = {numberOfPresents: 0}, action){
  // console.log("state:", state);
  // console.log("action:", action);
  switch(action.type) {
    case "INCREASE":
      return {...state.numberOfPresents, numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
