import React from "react";
import './main.css';
import { LostFound } from "./LostFound";
import { ToGetLF } from "./togetLF";


export const MainLF = () => {

  return(
    <>
{/* <div className="maindatablock">
    <div className="eachdata">
    <h1>Lost/Found type</h1>
    <div>
      <div>
        <p>Name : </p>
        <p>Roll No : </p>
        <p>Mobile No : </p>
        <p>Place : </p>
        <p>Date : </p>
        <p>Item : </p>
        <p>Additional Information : </p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
</div>
</div> */}




    <div className="divone">
    <LostFound/>
    </div>
    <div className="divtwo">
      <ToGetLF/>
    </div>
    </>
  )
}

