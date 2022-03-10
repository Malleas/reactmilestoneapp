import React from "react";
import FormTextArea from "./FormTextArea";
import FormInput from "./FormInput";
import axios from "axios";

class NewProduct extends React.Component{

    state = {
        productName: "Name",
        productDescription: "Some Description",
        productPrice: 0.00,
        productQuantity: 0,
    }

    updateName = (t) => {
        this.setState({productName: t})
    }

    updateDescription = (t) => {
        this.setState({productDescription: t})
    }

    updatePrice = (t) => {
        this.setState({productPrice: t})
    }

    updateQuantity = (t) => {
        this.setState({productQuantity: t})
    }

    saveProduct = async (product) => {
        axios.post('http://localhost:3100/products', product)
            .then(results => {
                console.log(results)
                console.log(results.data)
            })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("New Product: ", this.state)
        this.saveProduct(this.state)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <h1>Add New Product</h1>
                            <FormInput id="productName" title="Product name" placeholder="Enter Name" onChange={this.updateName}/>
                            <FormTextArea id="productDescription" title="Description" placeholder="Describe the product" onChange={this.updateDescription} />
                            <FormInput id="productPrice" title="Price" placeholder="Price" onChange={this.updatePrice}/>
                            <FormInput id="productQuantity" title="Quantity" placeholder="Quantity" onChange={this.updateQuantity}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="reset" className="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default NewProduct