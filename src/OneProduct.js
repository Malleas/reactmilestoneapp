import React from "react";

class OneProduct extends React.Component {
    render() {
        return(
            <div className="container">
                <h4>Product Details for</h4>
                <div className="row">
                    <div className="col col-sm-3">
                        <div className="card">
                            <img src="https://picsum.photos/250/250" className="card-img-top" alt="https://picsum.photos/250/250"/>
                            <div className="cart-body">
                                <h5 className="card-title">{this.props.product.productName}</h5>
                                <p className="card-text">{this.props.product.productDescription}</p>
                                <h5 className="card-title">Price: ${this.props.product.productPrice}</h5>
                                <h5 className="card-title">Quantity: {this.props.product.productQuantity}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OneProduct