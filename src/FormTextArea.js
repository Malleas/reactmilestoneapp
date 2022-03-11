import React from "react";

class FormTextArea extends React.Component {

    state = {inputData: this.props.value}

    handleChangeData = (e) => {
        this.setState({inputData: e.target.value}, () => {
            console.log("contents of the input = ", this.state.inputData);
            this.props.onChange(this.state.inputData);
        });
    }

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