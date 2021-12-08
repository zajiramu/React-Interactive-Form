import React from "react"

function FormComponent(props) {
    // determines if name field is empty by checking relevant property in state object
    const nameErrorMessage = props.state.hasName ? "" : "*** You Must Enter A Name ***";
    const nameErrorStyle = props.state.hasName ? "" : "error-input-text";
    const emailErrorMessage = props.state.hasEmail ? "" : "*** You Must Enter An Email ***";
    const emailErrorStyle = props.state.hasEmail ? "" : "error-input-text";
    return (
        <div>
            <form>
                <fieldset> 
                    <legend>Basic Info</legend>
                    <label>Name: </label>
                    <div className="error-message">{nameErrorMessage}</div>
                    <input type="text" name="name" value={props.state.name} 
                           onChange={props.handleChange} onBlur={props.handleBlur} onFocus={props.handleFocus}
                           className={nameErrorStyle}></input> <br/>
                    <label>Email:</label> 
                    <div className="error-message">{emailErrorMessage}</div>
                    <input type="text" name="email" value={props.state.email} 
                           onChange={props.handleChange} onBlur={props.handleBlur} onFocus={props.handleFocus}
                           className={emailErrorStyle}></input> <br/>
                    <label>Job Role:</label>
                    <select name="job" value={props.state.job} onChange={props.handleDropdown}>
                        <option value="full-stack">Full-Stack Web Developer</option>
                        <option value="front-end">Front End Web Developer</option>
                        <option value="back-end">Back End Web Developer</option>
                        <option value="designer">Designer</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                    </select>
                </fieldset> 
                <fieldset>
                    <legend>T-Shirt Info</legend>
                    <label>Size:</label>
                    <select name="size" value={props.state.size} onChange={props.handleDropdown}>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                        <option value="xLarge">XL</option>
                    </select>
                    <label>Design:</label>
                    <select name="design" value={props.state.design} onChange={props.handleDropdown}>
                        <option value="no-theme">Select Theme</option>
                        <option value="puns">Theme - JS Puns</option>
                        <option value="heart">Theme - I heart JS</option>
                    </select>
                    
                </fieldset>
            </form>
        </div>
    )
}

export default FormComponent