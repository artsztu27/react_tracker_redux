import React, { Component, useState } from 'react'
import { useDispatch } from "react-redux";
import { addItem } from "features/tracker/trackerSlice";

import '../style/form.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const AddBar = (props) => {
    const dispatch = useDispatch();
    const [item, setItem] = useState('');
    const [count] = useState(0);

    const handleChange = (e) => {
        if (item.length > 25 && e.target.value.length > 25) return
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const temp ={
            item: item,
            count,
        }
        dispatch(
            addItem(temp)
        );
        setItem('')
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <TextField type='text' id='item' required={true}
                        autoComplete='off'
                        variant='outlined'
                        helperText='請在這裡新增貨物追蹤'
                        label='貨物名稱' value={item}
                        placeholder='請在這裡新增貨物名稱' onChange={handleChange}
            />
            <Button className='submit' type='Submit'>新增</Button>
        </form>
    )
}

export default AddBar