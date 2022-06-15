import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { addItem } from "../actions/item";
import '../style/form.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const AddBar = (props) => {
    const [item, setItem] = useState('');
    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        if (item.length > 25 && e.target.value.length > 25) return
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addItem(item, count)
        setItem('')
    }

    return (
        <form className="add-form" onSubmit={handleSubmit()}>
            <TextField type='text' id='item' required={true}
                        autoComplete='off'
                        variant='outlined'
                        helperText='Add an item to keep track of.'
                        label='Item Name' value={item}
                        placeholder='Add Your Item Here' onChange={handleChange()}
            />
            <Button className='submit' type='Submit'>Submit</Button>
        </form>
    )
}

export default connect(props => ({ item: props.item }), { addItem })(AddBar)