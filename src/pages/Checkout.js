import React, { Component } from 'react'


export default class Checkout extends Component {
    render() {
        return (
            <div style={{height:'500px', marginTop:'80px', position:'relative'}}>
                <div className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
                    <h1 >Here should be the checkout page</h1>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul> 
                </div>
            </div>
        )
    }
}
