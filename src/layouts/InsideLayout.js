import React from 'react'

import Sidebar from '../components/Sidebar'

function InsideLayout(props) {
  return (
    <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
            {props.children}
        </div>
    </div>
  )
}

export default InsideLayout