import React,{useState} from 'react'
import {connect} from 'react-redux'

function Bat(props){
return (
 <>
<h1>Bat: {props.bats} </h1>
<button onClick={props.buybat} >Buy Bat</button>
 </>
)
}

const mapStateToProps  = (state)=>{
return{
  bats:state.bat.bats
}
}
const mapDispatchToProps = (dispatch) =>{
  return{
    buybat:()=>dispatch({type:'BUY_BAT'})
  }
  }

  //connect method to comnect ou props with store
  //dispatcher for passing action state to reducer and then reducer will perform action
export default connect(mapStateToProps,mapDispatchToProps)(Bat);