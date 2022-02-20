import React,{useState} from 'react'
import {connect} from 'react-redux'

function Ball(props){
return (
 <>
<h1>Ball: {props.balls} </h1>
<button onClick={props.buyball} >Buy Ball</button>
<button onClick={props.sellball} >Sell Ball</button>
 </>
)
}
const mapStateToProps  = (state)=>{
return{
  balls:state.ball.balls
}
}
const mapDispatchToProps = (dispatch) =>{
  return{
    buyball:()=>dispatch({type:'BUY_BALL'}),
    sellball:()=>dispatch({type:'SELL_BALL'})
  }
  }

  //connect method to comnect ou props with store
  //dispatcher for passing action state to reducer and then reducer will perform action
export default connect(mapStateToProps,mapDispatchToProps)(Ball);