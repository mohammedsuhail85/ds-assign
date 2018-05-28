import React, {Component} from 'react';
import Food from './Food';

export default class FoodTable extends Component {

    render() {

        let foodItem;

        if (this.props.foodList) {
            foodItem = this.props.foodList.map(food => {
                return (
                    <Food key={food.id} food={food}/>
                );
            })
        }

        return (
            <table cellPadding={3} cellSpacing={5}>
                <thead>
                <tr>
                    <th>Food Id</th>
                    <th>Food Discriprion</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {foodItem}
                </tbody>
            </table>
        );
    }
}
