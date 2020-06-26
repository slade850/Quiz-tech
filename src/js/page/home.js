import React from "react";
// import Login from "../component/login";
import {useDispatch} from 'react-redux'

const Home = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
    {
      <p>Please, Sign in first</p>
    }
    </div>
  )
}

export default Home;
