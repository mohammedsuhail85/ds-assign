import React, {Component} from 'react';
import '../App.css';

import FoodTable from './FoodTable';

export default class Menu extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <FoodTable/>
                </div>
            </div>
        );
    }
}
