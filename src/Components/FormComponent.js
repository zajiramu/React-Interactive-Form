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
            </form>

        </div>
    )
}

export default FormComponent