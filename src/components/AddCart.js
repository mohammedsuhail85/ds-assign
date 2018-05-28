import React, {Component} from 'react';
import '../App.css';

export default class AddCart extends Component {

    constructor() {
        super();
        this.state = {
            newCart: []

        };
    }

    addtoCart(e) {
        if (this.refs.qty.value === '') {
            alert("Enter Food Quantity");
        } else if(isNaN(this.refs.qty.value)){
            alert("Enter Numbers only");
        } else {
            this.setState({
                newCart: {
                    foodid: this.refs.foodsel.value,
                    quantity: this.refs.qty.value
                }
            }, () => {
                this.props.addNewCart(this.state.newCart);
            });
        }
        e.preventDefault();
    }

    render() {

        let foodOption;

        if (this.props.foodList) {
            foodOption = this.props.foodList.map(food => {
                return (
                    <option key={food.id} value={food.id}>{food.name}</option>
                );
            })
        }

        return (
            <div>
                <select ref="foodsel">{foodOption}</select> &nbsp;
                <label>Quantity</label> &nbsp;
                <input type="integer" ref="qty"/> &nbsp;
                <button onClick={this.addtoCart.bind(this)}>Add to Cart</button>
            </div>
        );
    }
}
