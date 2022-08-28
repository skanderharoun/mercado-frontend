import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';


import { fetchAllItems } from '../redux/actions/itemsActionCreators'
import ItemCard from './ItemCard'

function DisplayItems() {
    const items = useSelector(state => state.items.all)
    const userInfo = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllItems())
    }, [])
    const [showOnlyOwnItems, setShowOnlyOwnItems]= useState(false)
    const [managedItems, setManagedItems] = useState(items)
    useEffect(() => {
        if (showOnlyOwnItems) {
            setManagedItems(items.filter(item => item.user._id === userInfo._id))
        } else {
            setManagedItems(items)
        }
    }, [showOnlyOwnItems])
    useEffect(() => {
        setManagedItems(items)
    }, [items])
    const [searchTitle, setSearchTitle] = useState('')
    useEffect(() => {
        setManagedItems(items.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase())))
    }, [searchTitle])
    return (
        <Container className='p-5'>
            <div style={{ display: 'flex' }}>
                <Form.Control 
                    className='me-3 mb-5' 
                    value={searchTitle} 
                    onChange={e => setSearchTitle(e.target.value)}  
                    placeholder='Search by title'
                />
                {userInfo && <Form.Check
                    type="checkbox"
                    label='Show only my items'
                    checked={showOnlyOwnItems}
                    onChange={e => {
                        setShowOnlyOwnItems(e.target.checked)
                    }}
                />}
            </div>
            <Row>
                {managedItems.map(item => (
                    <ItemCard item={item} />
                ))}
            </Row>
        </Container>
    )
}

export default DisplayItems