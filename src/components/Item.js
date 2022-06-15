import React, { lazy, Suspense } from 'react'
import 'style/item.css';
import { useDispatch } from "react-redux";
import { removeItem, increaseCount, decreaseCount } from "features/tracker/trackerSlice";
const Card = lazy(() => import('@material-ui/core/Card'))
const Button = lazy(() => import('@material-ui/core/Button'))
const Typography = lazy(() => import('@material-ui/core/Typography'))
const ButtonGroup = lazy(() => import('@material-ui/core/ButtonGroup'))

const Item = (props) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
      dispatch(
        removeItem(props)
      );
    };

    const handleIncrease = () => {
      dispatch(
        increaseCount(props)
      );
    };
    const handleDecrease = () => {
      dispatch(
        decreaseCount(props)
      );
    };
    const fallback = () => <p>Loading...</p>

    return (
        <Suspense fallback={fallback()}>
            <Card className='item-card' id={props.id}>
                <Typography variant='' className='item-title'>{props.item}</Typography>
                <Typography variant='subtitle1' className='clicker'>{props.count} 箱</Typography>
                <ButtonGroup className='action-row'>
                    <Button onClick={handleIncrease} className='item-button'>+</Button>
                    <Button onClick={handleDecrease} className='item-button'>-</Button>
                    <Button onClick={handleRemove} className='item-button'>刪除</Button>
                </ButtonGroup>
            </Card>
        </Suspense>
    )
}

export default Item