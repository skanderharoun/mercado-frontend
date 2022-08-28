import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { requestCreatingItem } from "../redux/actions/itemsActionCreators";


function CreateItem(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [itemData, setItemData] = useState({
    title: '',
    description: '',
    photo: '',
    price: ''
  })
  // cost [title, setTitle] = useState('')
  // cost [description, setDescription] = useState('')
  async function handleSubmit(e) {
    e.preventDefault()
    dispatch(requestCreatingItem(itemData, history))
  }
  function handleChange(e) {
    setItemData(prevItemData => ({ ...prevItemData, [e.target.name]: e.target.value }))
  }
  return (
    <Container className="mt-3">
      <h1>Create New Item</h1>
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
        <Button type="submit" className="mx-auto d-block w-100">Add</Button>
      </Form>
    </Container>
  )
}

export default CreateItem;