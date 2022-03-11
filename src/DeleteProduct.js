import React from "react";
import FormInput from "./FormInput";
import "./App.css"
import axios from "axios";


class DeleteProduct extends React.Component {

    state = {
        id: this.props.product.id
    }

    deleteProduct = async (product) => {
        console.log("In DeleteProduct with ID: ", this.state.id)
        axios.delete('http://localhost:3100/products/' + this.state.id)
            .then(results => {
                console.log(results)
                console.log(results.data)
            })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.deleteProduct(this.props.product.id)
    }

    handleReset = () => {
        this.props.history.push("/")
        this.props.history.go(0)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} onReset={this.handleReset}>
                    <div className="form-group">
                        <h3>Are you sure you want to delete this product?</h3>
                        <FormInput id="productId" title="Product Id" value={this.props.product.id}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-light">Cancel</button>
                </form>
            </div>
        );
    }
}
export default DeleteProduct