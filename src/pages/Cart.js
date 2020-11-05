import React, {Component} from 'react';


class Home extends React.Component {
    render() {
        return(
            <div style={{height:'500px', marginTop:'80px', position:'relative'}}>
                <div>
                    <h1 className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>Here goes the cart items</h1>
                </div>
            </div>
        )
    }
}

export default Home;