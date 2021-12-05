import React from "react"

function FormComponent(props) {
    // determines if name field is empty by checking relevant property in state object
    const nameErrorMessage = props.state.hasName ? "" : "*** Please Enter A Name ***"
    const emailErrorMessage = props.state.hasEmail ? "" : "*** Please Enter An Email ***"
    return (
        <div>
            <form>
                <fieldset> 
                    <legend>Basic Info</legend>
                    <label>Name: </label>
                    <div>{nameErrorMessage}</div>
                    <input type="text" name="name" value={props.state.name} 
                           onChange={props.handleChange} onBlur={props.handleBlur} onFocus={props.handleFocus}></input> <br/>
                    <label>Email:</label> 
                    <div>{emailErrorMessage}</div>
                    <input type="text" name="email" value={props.state.email} 
                           onChange={props.handleChange} onBlur={props.handleBlur} onFocus={props.handleFocus}></input> <br/>
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
                    <label>Size:</label>
                    <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <label>Design:</label>
                    <select>
                        <option>Select Theme</option>
                        <option>Theme - JS Puns</option>
                        <option>Theme - I heart JS</option>
                    </select>
                </fieldset>
            </form>
        </div>
    )
}

export default FormComponent