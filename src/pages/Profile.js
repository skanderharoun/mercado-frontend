import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'

function Profile() {
  const userInfo = useSelector(state => state.user.info)
  return (
    <>
      <h1 className='text-center'>Profile</h1>
      <Table striped bordered hover style={{ maxWidth: 500 }} className="mx-auto">
        <tbody>
          <tr>
            <td>First Name</td>
            <td> {userInfo.firstName} </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td> {userInfo.lastName} </td>
          </tr>
          <tr>
            <td>Email</td>
            <td> {userInfo.email} </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Profile