import React, { lazy, Suspense} from 'react'
const Item = lazy(() => import('./Item'))

const ItemList = ({items}) => {

    function renderItems() {
        return items.map((e, idx) => <Item key={e.id} id={e.id} item={e.item} count={e.count}/>)
    }

    function fallback() {
        return <p>Loading...</p>
    }

    return (
        <div className='item-list'>
            <Suspense fallback={fallback}>
                {renderItems()}
            </Suspense>
        </div>
    )
}

export default ItemList