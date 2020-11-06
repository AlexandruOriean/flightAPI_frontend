import React from 'react';
import '../styles/copyright.css'

class Copyright extends React.Component {
    render() {
        return(
            <div>
                 {/* <!-- Copyright Section--> */}
                 <div className="copyright py-4 text-center text-white bg-dark">
                    <div className="container"><small>Copyright © Logos 2020</small></div>
                </div>
            </div>
        )
    }
}

export default Copyright;