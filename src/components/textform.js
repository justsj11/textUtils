import React, { useState } from 'react'
//import { text } from 'stream/consumers';


function Textform(props) {
    
    const handleUpClick = ()=>{
        console.log ( "Uppercase was clicked");
        let newText = text.toUpperCase();
        SetText("newtext")
        }
        const handleOnChange = (event)=>{
            console.log("On change");
            setText(event.target.value);
            }
    return (
        <form>
            <div className="form-group">
                <h1>{props.heading}</h1>
                <textarea className="form-control container" id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary" onClick = {handleUpClick()} onChange={handleOnChange} >Convert to UpperCase</button>
            </div>
        </form>
    )
}
export default Textform;



