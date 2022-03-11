import React from "react";
import "./App.css"
import TableRow from "./TableRow";

class ProductList extends React.Component{

    handleOnClick = (id) => {
        console.log("Product ID Picked: ", id)
        this.props.onClick(id)
    }

    handleEditProduct = (productId) => {
        console.log("The productId to edit is: ", productId)
        this.props.onEditProduct(productId)
    }

    handleDeleteProduct = (productId) => {
        console.log("The productId to delete is: ", productId)
        this.props.onDeleteProduct(productId)
    }

    render() {
        console.log(this.props.productList)
        const products = this.props.productList.map(
            (product) => {
                return (
                    <TableRow
                        key={product.id}
                        productId={product.id}
                        productName={product.productName}
                        productDescription={product.productDescription}
                        productPrice={product.productPrice}
                        productQuantity={product.productQuantity}
                        onClick={this.handleOnClick}
                        editProduct={this.handleEditProduct}
                        deleteProduct={this.handleDeleteProduct}
                        />
                )
            }
        )
        return (
            <div className="container">
                        {products}
            </div>
        );
    }
}
export default ProductList