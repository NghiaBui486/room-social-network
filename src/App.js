import React from 'react';
import './App.css';
import './site.css';
import Header from './header';
import Search from './search';
import Site from './site';
import Room from './room';
import RoomTwo from './room2';
import City from './city';


function App() {
  return (    
<>
    <Header/>
    <Search/>
    <br/>
    <Site/>
    <br/>
    <Room/>
    <RoomTwo/>
    <City/>
</>
  );
}
export default App;
