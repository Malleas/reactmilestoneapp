import React from "react";
import "./App.css"

class TableRow extends React.Component{

    handleOnClick = () => {
        console.log("Product picked in TableRow: ", this.props.productId)
        this.props.onClick(this.props.productId)

    }

    handleEditProduct = () => {
        console.log("TableRow product edit id: ", this.props.productId)
        this.props.editProduct(this.props.productId)
    }

    handleDeleteProduct = () => {
        console.log("TableRow product delete id: ", this.props.productId)
        this.props.deleteProduct(this.props.productId)
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>{this.props.productId}</td>
                        <td>{this.props.productName}</td>
                        <td>{this.props.productDescription}</td>
                        <td>${this.props.productPrice}</td>
                        <td>{this.props.productQuantity}</td>
                        <td><button onClick={this.handleOnClick} className="btn btn-primary">Select</button></td>
                        <td><button onClick={this.handleEditProduct} className="btn btn-secondary">Edit</button></td>
                        <td><button onClick={this.handleDeleteProduct} className="btn btn-danger">Delete</button></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}
export default TableRow