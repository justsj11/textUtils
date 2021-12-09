import React, { useState } from 'react'


function Textform(props) {
    const [text, setText] = useState("Enter text here!")
    return (
        <form>
            <div className="form-group">
                <h1>{props.heading}</h1>
                <textarea className="form-control container" id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary">Convert to UpperCase</button>
            </div>
        </form>
    )
}

export default Textform;
