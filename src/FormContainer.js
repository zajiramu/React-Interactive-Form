import React from "react"
import FormComponent from "./Components/FormComponent"

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Enter Your Name",
            hasName: true,
            email: "Enter Your Email",
            hasEmail: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const inputElementType = event.target.type;
        const inputElementName = event.target.name;
        const inputElementValue = inputElementType === "checkbox" ? event.target.checked : event.target.value;
        //console.log(inputElementValue, inputElementName)
        this.setState( {[inputElementName]: inputElementValue} );
    }

    handleFocus(event) {
    }

    handleBlur(event) {
        const inputElementName = event.target.name;
        const inputElementValue = event.target.value;
        const hasProperty = "has" + inputElementName[0].toUpperCase() + inputElementName.substring(1);
        const newState = {
            [inputElementName]: inputElementValue,
            [hasProperty]: inputElementValue === "" ? false : true
        };
        this.setState(newState);
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