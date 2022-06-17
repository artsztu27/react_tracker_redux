import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import {
  getDataAsync,
} from './features/tracker/trackerSlice';
import { useDispatch } from 'react-redux';
const Header = lazy(() => import('./containers/Header'))
const Body = lazy(() => import('./containers/Body'))

const fallBack = () => <p>Loading...</p>

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAsync());
  }, [])
  return (
      <div className="App">
        <Suspense fallback={fallBack}>
          <h1 className='title'>訂貨單</h1>
          <Header />
          <Body />
        </Suspense>
      </div>
  );
}

export default App
