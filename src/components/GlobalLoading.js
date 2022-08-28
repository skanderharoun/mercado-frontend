import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'

function GlobalLoading() {
  const loading = useSelector(state => state.feedback.loading)
  return (
    <div className='global-loading' style={{ display: loading ? 'flex' : 'none' }}>
      <Spinner animation="grow" variant="light" />
    </div>
  )
}

export default GlobalLoading