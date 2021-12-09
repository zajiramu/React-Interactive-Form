import React from "react"
import FormComponent from "./Components/FormComponent"

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Enter Name",
            hasName: true,
            email: "Enter Email",
            hasEmail: true,
            job: "full-stack",
            size: "small",
            design: "no-design",
            color: "no-color",
            main: false,
            frameworks: false,
            libs: false, 
            express: false,
            node: false,
            build: false, 
            npm: false   
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleCheckboxes = this.handleCheckboxes.bind(this);
    }

    handleChange(event) {
        const inputElementType  = event.target.type;
        const inputElementName  = event.target.name;
        const inputElementValue = event.target.value;
        const hasProperty = "has" + inputElementName[0].toUpperCase() + inputElementName.substring(1);
        const newState = {
            [inputElementName]: inputElementValue,
            [hasProperty]: inputElementValue === "" ? false : true
        };
        this.setState(newState);
    }

    handleFocus(event) {
        const inputElementName = event.target.name;
        const inputElementValue = event.target.value;
        const inputElementInitialValue = "Enter " + inputElementName[0].toUpperCase() + inputElementName.substring(1);
        if(inputElementValue === inputElementInitialValue) {
            this.setState( {[inputElementName]: ""} )
        }
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

    handleDropdown(event) {
        this.setState( { [event.target.name]: event.target.value } );
    }

    handleCheckboxes(event) {
        const newState = {
            [event.target.name]: event.target.checked
        };
        this.setState(newState);
    }

    render() {
        return <FormComponent 
                    state            = { {...this.state} }
                    handleChange     = {this.handleChange}
                    handleFocus      = {this.handleFocus}
                    handleBlur       = {this.handleBlur}
                    handleDropdown   = {this.handleDropdown}
                    handleCheckboxes = {this.handleCheckboxes}
               />
    }
}

export default FormContainer