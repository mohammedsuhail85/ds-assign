import React, {Component} from 'react';
import './App.css';

import Login from './components/Login';
import Menu from './components/Menu';
import FoodTable from "./components/FoodTable";
import AddCart from './components/AddCart';
import DisplayCart from './components/DisplayCart';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            foodList: [],
            cart: [],
            user: [{username: 'Suhail', password: '123'}],
            loginStatus: 0
        };
    };

    componentWillMount() {
        this.setState({
            foodList: [
                {id: 1, name: 'Rice', price: 250},
                {id: 2, name: 'Kottu', price: 400},
                {id: 3, name: 'Rired Rice', price: 500}
            ]
        })
    }

    handleaddCart(vals) {
        let cartNew = this.state.cart;
        cartNew.push(vals);
        this.setState({cart: cartNew});

        console.log(this.state.cart);
    };

    getValidUser(username, password) {
        if (this.state.username === username && this.state.password === password) {
            this.setState(this.state.loginStatus = 1);
        }
    }

    switchStatement() {
        switch (this.state.loginStatus) {
            case 0:
                <Login loginState={this.state.loginStatus}/>
            case 1:
                <Menu/>
        }
    }

    makePayment() {
        if (this.state.cart == []) {
            alert("Order foods");
        } else {
            alert("Order Placed");
        }
    }


    render() {
        return (
            <div align="center" className="App.css">

                <h1>Online Food Store</h1>

                {this.switchStatement()}

                <Login/>


                <FoodTable foodList={this.state.foodList}/>

                <br/>
                <br/>
                <h3>Order Foods Here</h3>
                <AddCart foodList={this.state.foodList} addNewCart={this.handleaddCart.bind(this)}/>

                <br/>
                <br/>

                <div>

                    <DisplayCart cartValues={this.state.cart}/>

                    <button onClick={this.makePayment.bind(this)}>Make Payment</button>

                </div>
            </div>
        );
    }
}
