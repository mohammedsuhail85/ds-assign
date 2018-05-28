import React, {Component} from 'react';
import '../App.css';

export default class DisplayCart extends Component {
    render() {

        let cartValues;

        if (this.props.cartValues) {
            cartValues = this.props.cartValues.map(item => {
                return (
                    <tr className="FoodList">
                        <td>{item.foodid}</td>
                        <td>{item.quantity}</td>
                    </tr>
                );
            })
        }

        return (
            <table cellPadding={3} cellSpacing={5}>
                <thead>
                <tr>
                    <th>Food Id</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {cartValues}
                </tbody>
            </table>

        );
    }
}
