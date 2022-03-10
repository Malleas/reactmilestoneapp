import React from "react";

class FormTextArea extends React.Component {

    state = {inputData: this.props.value}

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.title}</label>
                <textarea onChange={this.handleChangeData} value={this.state.inputData} className="form-control" id={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}
export default FormTextArea