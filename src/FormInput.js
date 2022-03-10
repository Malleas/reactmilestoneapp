import React from "react";

class FormInput extends React.Component {

    state = {inputData:this.props.value}

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
                <input onChange={this.handleChangeData} value={this.state.inputData} type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}
export default FormInput