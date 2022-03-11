import React from "react";
import axios from "axios";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import "./App.css"

class EditProduct extends React.Component {
    state = {
        id:this.props.product.id,
        productName:this.props.product.productName,
        productDescription:this.props.product.productDescription,
        productPrice:this.props.product.productPrice,
        productQuantity:this.props.product.productQuantity,
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
        axios.post('http://localhost:3100/products/' + product.id, product)
            .then(results => {
                console.log(results)
                console.log(results.data)
            })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("Form Submit = ", this.state)
        this.saveProduct(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <h1>Edit Album</h1>
                        <FormInput id="productName" title="Product Name" value={this.props.product.productName} onChange={this.updateName}/>
                        <FormTextArea id="productDescription" title="Product Description" value={this.props.product.productDescription} onChange={this.updateDescription} />
                        <FormInput id="productPrice" title="Product Price" value={this.props.product.productPrice} onChange={this.updatePrice} />
                    <FormInput id="productQuantity" title="Quantity" value={this.props.product.productQuantity} onChange={this.updateQuantity}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-light">Cancel</button>
                </form>
            </div>
        )
    }
}
export default EditProduct