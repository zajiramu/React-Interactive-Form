import React from "react"
import FormComponent from "./Components/FormComponent"

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

    }

    render() {
        return <FormComponent 
                    state = { {...this.state} }
               />
    }
}

export default FormContainer