import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap'

import { fetchItemById } from '../redux/actions/itemsActionCreators'

export default function ItemDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedItem = useSelector(state => state.items.selected)

  useEffect(() => {
    dispatch(fetchItemById(id))
  }, [dispatch, id])

  return (
    <Container className='mt-3'>
      {
        selectedItem ? (
          <>
            <h1>Item details</h1>
            <img alt="item-img" className="mb-3 d-block mx-auto" style={{ maxWidth: 500 }} src={selectedItem.photo} />
            <Table striped bordered hover style={{ maxWidth: 500 }} className="mx-auto">
              <tbody>
                <tr>
                  <td>Title</td>
                  <td> {selectedItem.title} </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td> {selectedItem.description} </td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td> {selectedItem.price} </td>
                </tr>
                <tr>
                  <td>Owner</td>
                  <td> {selectedItem.user.firstName} {selectedItem.user.lastName} </td>
                </tr>
                <tr>
                  <td>Owner Phone Number</td>
                  <td> {selectedItem.user.phone} </td>
                </tr>
              </tbody>
            </Table>            
          </>
        ) : (
          <div className='alert alert-danger'>
            <h3>Item not found</h3>
          </div>
        )
      }
    </Container>
  )
}
