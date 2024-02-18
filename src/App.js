import './App.css';
import {action,originals,horror, romance} from './urls'

import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar'

import React from 'react';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
    
   
    <NavBar/>
    <Banner />
    <RowPost url={originals} title={'Netflix originals'}/>
    <RowPost url={action}title={'Action'} isSmall/>
    <RowPost url={romance}title={'Romance'} isSmall/>
    <RowPost url={horror}title={'Horror'} isSmall/>
   
    </div>
    
  );
}

export default App;
