const intialState = {
  balls:50,
}
// // Setting up the initialstate for bats
// passing state argument initial state int bATReducer function, another thing is action with switch type statement we can also use if-slse
const BallReducer = (state=intialState,action)=>
{
  //all the changes should be immutable
  switch(action.type)
  {
  case 'BUY_BALL':
    return{...state,balls:state.balls+1}
  case 'SELL_BALL':
    return{...state,balls:state.balls-1}
  default:
    return state;

}
}

export default BallReducer;