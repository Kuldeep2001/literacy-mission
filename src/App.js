import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

function App() {
  const [theme,setTheme] = useState('light')
  return (
    <div className="container-fluid">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Carousel />
    </div>
  );
}

export default App;