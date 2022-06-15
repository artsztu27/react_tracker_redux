import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { connect } from 'react-redux'
// const Header = lazy(() => import('./containers/Header'))
const Body = lazy(() => import('./containers/Body'))

const fallBack = () => <p>Loading...</p>

function App(props) {
  return (
      <div className="App">
        <Suspense fallback={fallBack}>
          <h1 className='title'>訂貨單</h1>
          <Body />
        </Suspense>
      </div>
  );
}

export default App
