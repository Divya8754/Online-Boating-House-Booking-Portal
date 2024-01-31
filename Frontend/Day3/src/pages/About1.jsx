import React from "react";
import Header from "./Header";
import Navbar3 from "../components/Navbar3";
import { Link } from "react-router-dom";
function Ab1(){
    return(
        <div>
        <Navbar3/>
        <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2017/09/27/06/31/houseboat-kerala-2791119_640.jpg")',
          height: 450,
          marginTop: 6
        }}>
        </div>
        <button>EDIT</button>
        <button>ADD</button>
        <button>REMOVE</button>
       <Link to="/Ahome"> <button>cancel</button></Link>
        
      </div>
     
    )
}
export default Ab1;