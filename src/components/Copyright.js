import React, {component} from 'react';
import '../styles/copyright.css'

class Copyright extends React.Component {
    render() {
        return(
            <div>
                 {/* <!-- Copyright Section--> */}
                 <div class="copyright py-4 text-center text-white bg-dark">
                    <div class="container"><small>Copyright © Logos 2020</small></div>
                </div>
            </div>
        )
    }
}

export default Copyright;