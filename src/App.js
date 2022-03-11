import React from "react";
import Navbar from "./Navbar";
import dataSource from "./dataSource";
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history'
import ProductList from "./ProductList";
import OneProduct from "./OneProduct";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const history = createBrowserHistory();



class App extends React.Component{

    state = {productsList: [], currentlySelectedProductId : 0}

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await dataSource.get('/products')
        this.setState({productsList:response.data})
    }

    updateSingleProduct = (id) => {
        console.log("ID from App: ", id)
        let indexNumber = 0
        for(let i = 0; i < this.state.productsList.length; i++){
            if(this.state.productsList[i].id === id){
                indexNumber = i
            }
            this.setState({currentlySelectedProductId:indexNumber})
            history.push('/product/' + indexNumber)
        }
    }

    editProduct = (productId) => {
        console.log("Product id from App: ", productId)
        let indexNumber = 0
        for(let i = 0; i < this.state.productsList.length; i++){
            if(this.state.productsList[i].id === productId){
                indexNumber = i
            }
            this.setState({currentlySelectedProductId: indexNumber})
            history.push("/edit/" + indexNumber)
        }
    }

    deleteProduct = (productId) => {
        console.log("Product id from App: ", productId)
        let indexNumber = 0
        for(let i = 0; i < this.state.productsList.length; i++){
            if(this.state.productsList[i].id === productId){
                indexNumber = i
            }
            this.setState({currentlySelectedProductId: indexNumber})
            history.push("/delete/" + indexNumber)
        }
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render={ () => {
                            return (
                                <div>
                                    <ProductList productList={this.state.productsList} onClick={this.updateSingleProduct}
                                    onEditProduct={this.editProduct} onDeleteProduct={this.deleteProduct}/>
                                </div>
                            )
                        }}/>
                        <Route exact path="/new" component={NewProduct} />
                        <Route exact path="/product/:productId" render={ () =>
                        <OneProduct product={this.state.productsList[this.state.currentlySelectedProductId]} />} />
                        <Route exact path="/edit/:productId" render={ () =>
                        <EditProduct product={this.state.productsList[this.state.currentlySelectedProductId]} />} />
                        <Route exact path="/delete/:productId" render={ () =>
                        <DeleteProduct product={this.state.productsList[this.state.currentlySelectedProductId]}/>} />
                    </Switch>

                </div>
            </Router>

        )
    }
}
export default App