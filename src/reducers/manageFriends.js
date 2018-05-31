export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}

    case "REMOVE_FRIEND":
      const friendIndex = state.friends.findIndex((friend) => friend.id === action.id)
      const newFriend = [...state.friends]
      newFriend.splice(friendIndex, 1)
      return {friends: newFriend}

    default:
      return state;
  }
}
