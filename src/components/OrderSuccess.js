import React from 'react';


class OrderSuccess extends React.Component {
    render() {
        return(
            <div style={{height:'500px', marginTop:'80px', position:'relative'}}>
                <div>
                    <h1 className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>Congratulations, your order has been placed succesfully. You will receive an email confirmation shortly. </h1>
                </div>
            </div>
        )
    }
}

export default OrderSuccess;