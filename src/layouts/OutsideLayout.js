import React from 'react'

import Navbar from '../components/Navbar'

function OutsideLayout(props) {
    return (
        <div>
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default OutsideLayout