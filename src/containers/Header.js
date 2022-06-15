import React, { lazy, Suspense } from 'react'
import '../style/add-bar.css'
const AddBar = lazy(() => import("../components/AddBar"))

const fallback = () => <p>Loading...</p>
const Header = () => {
    return(
        <div className='add-bar'>
            <Suspense fallback={fallback}>
                <AddBar />
            </Suspense>
        </div>
    )
}

export default Header