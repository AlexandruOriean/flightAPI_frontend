import React from 'react';


class OrderSuccess extends React.Component {
    render() {
        return(
            <div style={{height:'500px', marginTop:'80px', position:'relative'}}>
                <div>
                    <h1 className="text-black" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>Congratulations, your order with the id #610342341 has been placed succesfully.</h1>
                </div>
            </div>
        )
    }
}

export default OrderSuccess;