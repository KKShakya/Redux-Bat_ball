import React from "react";
import "./style.css";
import Bat from "./Components/Bat"
import Ball from "./Components/Ball"
//using provide rfrom redux to wrap our component inside a store
import {Provider} from 'react-redux'
import store from "./Redux/store"

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Bat/>
      <Ball />
      </Provider>
    </div>
  );
}
