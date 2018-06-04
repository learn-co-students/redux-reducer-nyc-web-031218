export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return{
        friends:[
          ...state.friends,
          action.friend
        ]

      }
    case "REMOVE_FRIEND":
      const newFriends = state.friends.filter((friend)=>{
        return friend.id !== action.id
      })

      return Object.assign({},state,{
        friends: newFriends
      })

    default:
      return state
  }
}
//
// items: [
//     ...state.items.slice(0, action.payload),
//     ...state.items.slice(action.payload + 1)
// ],
//
// manageFriends(state, {
//   type: "REMOVE_FRIEND",
//   id: 101
// })

//
// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };
