import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">My Products App</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link " to="/">All Products</Link>
                        <Link className="nav-item nav-link" to="/new">Add Product</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar