import React from "react";
import { Link } from "react-router-dom";
//import StreamList from "./streams/StreamList";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={"/"} className='item' >
       <h1> Streamer</h1> 
      </Link>

      <div className="right menu">
        <Link to={'/'} className="ui item"><h2> Logout </h2></Link>
      </div>
    </div>
  );
};

export default Header;
