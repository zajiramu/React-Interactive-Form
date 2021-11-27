import React from "react"
import FormComponent from "./Components/FormComponent"

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const inputElementType = event.target.type;
        const inputElementName = event.target.name;
        const inputElementValue = inputElementType === "checkbox" ? event.target.checked : event.target.value;
        
    }

    render() {
        return <FormComponent 
                    state = { {...this.state} }
                    handleChange = {this.handleChange}
               />
    }
}

export default FormContainer