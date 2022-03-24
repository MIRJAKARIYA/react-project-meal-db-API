import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  const [count , setCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  useEffect( ()=>{
   const myText = document.getElementById('search-text').value;
   setSearchText(myText)
  },[count])
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='input-container'>
        <input id='search-text' className='input-field' type="text" />
        <button className='search-button' onClick={()=>setCount(count+1)}>search</button>
      </div>
      <Shop searchText={searchText}></Shop>
    </div>
  );
}

export default App;
