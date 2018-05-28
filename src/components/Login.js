import React, {Component} from 'react';
import axios from 'axios';



export default class Login extends Component {
    constructor() {
        super();

        this.state={
            username:null,
            password:null
        }
    }

    checkUser() {
        return axios({
            method: 'POST',
            uri: 'http://localhost:8080/food_services/rest/foods',
            config: {
                headers : {
                    'Content-type': 'application/json',
                    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
                }
            },
            body: {
                data: {
                    'username':"Admin", "password":"123"
                }
            }
        }).then(response => {
            console.log("returned");
            console.log(response.status);
        });
    }

    displayInfo(){
        console.log(this.refs.id.value + " " + this.refs.password.value);
    }

    render() {
        return (
            <div align="center">
                <table>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" ref="id"/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" ref="password"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button value="Login" onClick=
                            {this.checkUser.bind(this)}>Login</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}
