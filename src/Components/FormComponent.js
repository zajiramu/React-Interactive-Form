import React from "react"

function FormComponent(props) {
    // determines if name field is empty by checking relevant property in state object
    const nameErrorMessage = props.state.hasName ? "" : "*** You Must Enter A Name ***";
    const nameErrorStyle = props.state.hasName ? "" : "error-input-text";
    const emailErrorMessage = props.state.hasEmail ? "" : "*** You Must Enter An Email ***";
    const emailErrorStyle = props.state.hasEmail ? "" : "error-input-text";
    // checks to see if t-shirt design is selected and displays t-shirt color dropdown
    //let shirtColorMenu;
    let punsColorOptions = [
        <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>,
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>, 
        <option value="gold">Gold (JS Puns shirt only)</option> ];

    let heartColorOptions = [
        <option value="tomato">Tomato (I &#9829; JS shirt only)</option>,
        <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>, 
        <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> ]; 
    
    let colorOptionsStyle = props.state.design === "no-design" ? {display: "none"} : {display: ""};
    
        
        //const toDisplay = props.state.design === "puns" ? punsColorOptions : heartColorOptions;
        // shirtColorMenu = 
        //                 <div>
        //                     <label>Color:</label>
        //                     <select name="color" value={props.state.color} onChange={props.handleDropdown}>
        //                         <option value="no-color">Select Color</option>
        //                         {props.state.design === "puns" ? punsColorOptions : heartColorOptions}
        //                     </select>
        //                 </div>
    

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
                        <option value="no-design">Select Theme</option>
                        <option value="puns">Theme - JS Puns</option>
                        <option value="heart">Theme - I heart JS</option>
                    </select>
                    <label style={colorOptionsStyle}> Color:</label>
                    <select name="color" value={props.state.color} onChange={props.handleDropdown} style={colorOptionsStyle}>
                        <option value="no-color">Select Color</option>
                        {props.state.design === "puns" ? punsColorOptions : heartColorOptions}
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Register For Activities</legend>
                    <label>
                        <input type="checkbox"></input> Main Conference - $200
                    </label> <br/>
                    <label>
                        <input type="checkbox"></input> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100
                    </label> <br/>
                    <label>
                        <input type="checkbox"></input> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100
                    </label> <br/>
                    <label>
                        <input type="checkbox"></input> Express Workshop — Tuesday 9am-12pm, $100
                    </label> <br/>
                    <label>
                        <input type="checkbox"></input> Node.js Workshop — Tuesday 1pm-4pm, $100
                    </label> <br/>
                    <label>
                        <input type="checkbox"></input> Build tools Workshop — Wednesday 9am-12pm, $100
                    </label> <br/>
                    <label>
                        <input type="checkbox"></input> npm Workshop — Wednesday 1pm-4pm, $100
                    </label> <br/>
                </fieldset>
            </form>
        </div>
    )
}

export default FormComponent