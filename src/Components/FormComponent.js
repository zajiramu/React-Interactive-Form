import React from "react"

function FormComponent(props) {
    return (
        <div>
            <form>
                <fieldset> 
                    <legend>Basic Info</legend>
                    <label>Name: <input type="text" name="name" value={props.state.name} onChange={props.handleChange}></input></label> <br/>
                    <label>Email: <input type="text"></input></label> <br/>
                    <label>Job Role:</label>
                    <select>
                        <option>Full-Stack Web Developer</option>
                        <option>Front End Web Developer</option>
                        <option>Back End Web Developer</option>
                        <option>Designer</option>
                        <option>Student</option>
                        <option>Other</option>
                    </select>
                </fieldset> 

                <fieldset> 
                    <legend>T-Shirt Info</legend>

                    <label>Size: </label>
                    <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>

                    <label> Design: </label>
                    <select>
                        <option>Select Theme</option>
                        <option>Theme - JS Puns</option>
                        <option>Theme - I Love JS</option>
                    </select>

                    <label> Color: </label>
                    <select>
                        <option>Cornflower Blue (JS Puns shirt only)</option>
                        <option>Dark Slate Grey (JS Puns shirt only)</option>
                        <option>Gold (JS Puns shirt only)</option>
                    </select>
                </fieldset>
                
                <button>SUBMIT</button>
            </form>

        </div>
    )
}

export default FormComponent