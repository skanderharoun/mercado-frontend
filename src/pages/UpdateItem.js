import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

import { fetchItemById, requestUpdatingItem } from "../redux/actions/itemsActionCreators";


function UpdateItem(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const selectedItem = useSelector(state => state.items.selected)
  const { id } = useParams()
  const [itemData, setItemData] = useState({
    title: '',
    description: '',
    photo: '',
    price: ''
  })

  useEffect(() => {
    if (selectedItem) {
      setItemData(selectedItem)
    }
  }, [selectedItem])

  useEffect(() => {
    dispatch(fetchItemById(id))
  }, [dispatch, id])

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description, photo, price } = itemData
    dispatch(requestUpdatingItem(id, { title, description, photo, price }, history))
  }

  function handleChange(e) {
    setItemData(prevItemData => ({ ...prevItemData, [e.target.name]: e.target.value }))
  }

  return (
    <Container className="mt-3">
      <h1>Update Item</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={itemData.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={itemData.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control name="photo" value={itemData.photo} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" value={itemData.price} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" className="mx-auto d-block w-100">Update</Button>
      </Form>
    </Container>
  )
}

export default UpdateItem;