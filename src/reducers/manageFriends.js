export function manageFriends(state, action){
  console.log("state:", state);
  console.log("action:", action);
  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return Object.assign({}, state, {
       friends: [
         ...state.friends.slice(0, removalIndex),
         ...state.friends.slice(removalIndex + 1)
       ]
     });
    default:
      return state;
  }
}


// case "REMOVE_FRIEND":
//   let cutFriend = state.friends.findIndex(friend => friend.id === action.id)
//   return {...state, friends: state.friends.splice(cutFriend, 1) }
