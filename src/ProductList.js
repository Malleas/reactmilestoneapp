import React from "react";
import "./App.css"
import TableRow from "./TableRow";

class ProductList extends React.Component{

    handleOnClick = (id) => {
        console.log("Product ID Picked: ", id)
        this.props.onClick(id)
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