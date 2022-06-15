import React, { lazy, Suspense } from 'react'
import Container from '@material-ui/core/Container'
import { useSelector } from "react-redux";
import { selectTracker } from "features/tracker/trackerSlice";

const ItemList = lazy(() => import("components/ItemList"))

const fallback = () => <p>Loading...</p>
const Body = () => {
    const items = useSelector(selectTracker);
    return (
        <Container maxWidth="lg">
            <Suspense fallback={fallback}>
                <ItemList items={items}/>
            </Suspense>
        </Container>
    )
}

export default Body;