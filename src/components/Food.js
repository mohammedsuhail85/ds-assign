import React, {Component} from 'react';
import '../App.css';

export default class Food extends Component {
    render() {
        return (
            <tr className="FoodList">
                <td>{this.props.food.id}</td>
                <td>{this.props.food.name}</td><td>{this.props.food.price}</td>
            </tr>
        );
    }
}
