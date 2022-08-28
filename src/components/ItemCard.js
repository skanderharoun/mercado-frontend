import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import DeleteItemModal from './DeleteItemModal'

function ItemCard({ item }) {
    const { isAuth, info } = useSelector(state => state.user)
    const itemUserId = item?.user?._id
    const userId = info && info._id
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-2'>
            <Card>
                <Card.Img variant="top" src={item.photo} height={150} style={{ objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        {item.price} TND
                    </Card.Text>
                    <Link to={`/items/${item._id}`}>
                        <Button variant="primary" className='mx-1'><i class="bi bi-eye-fill"></i></Button>
                    </Link>
                    {
                        isAuth && userId === itemUserId && (
                            <>
                                <Link to={`/update-item/${item._id}`}>
                                    <Button variant="warning" className='mx-1'><i class="bi bi-pencil-square"></i></Button>
                                </Link>
                                <DeleteItemModal item={item} />
                            </>
                        )
                    }
                    <p style={{ textAlign: 'right' }} > {item.user?.firstName} {item.user?.lastName} </p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCard