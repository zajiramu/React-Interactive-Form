import React from "react"
import FormComponent from "./Components/FormComponent"

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Please Enter Your Name",
            email: "Please Enter Your Email"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const inputElementType = event.target.type;
        const inputElementName = event.target.name;
        const inputElementValue = inputElementType === "checkbox" ? event.target.checked : event.target.value;
        this.setState( {[inputElementName]: inputElementValue} );
    }

    handleFocus(event) {
        const inputElementName = event.target.name;
        this.setState( {name: ""} )
    }

    handleBlur(event) {
        if(event.target.value === "") this.setState( {name: "Please Enter Your Name"} )
    }

    render() {
        return <FormComponent 
                    state = { {...this.state} }
                    handleChange = {this.handleChange}
                    handleFocus = {this.handleFocus}
                    handleBlur = {this.handleBlur}
               />
    }
}

export default FormContainer