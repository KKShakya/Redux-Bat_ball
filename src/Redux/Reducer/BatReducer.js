const intialState = {
  bats:30,
}
// // Setting up the initialstate for bats
// passing state argument initial state int bATReducer function, another thing is action with switch type statement we can also use if-slse
const BatReducer = (state=intialState,action)=>
{
  //all the changes should be immutable
  switch(action.type)
  {
  case 'BUY_BAT':
    return{...state,bats:state.bats-1}
  default:
    return state;

}
}

export default BatReducer;