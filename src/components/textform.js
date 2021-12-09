import React from 'react'

function Textform() {
    return (
        <div>
            <form>
                <div className="mb-3 container">
                    <label for="headerText" className="form-label">Enter the text to analyze.</label>
                    <input type="text" className="form-control" id="exampleTextArea" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Textform;
