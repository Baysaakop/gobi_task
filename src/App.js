import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  const [breakpoint, setBreakpoint] = useState()

  useEffect(() => {
      if (window.screen.availWidth > 992) {
          setBreakpoint('lg')
      } else if (window.screen.availWidth > 576) {
          setBreakpoint('sm')
      } else {
          setBreakpoint('xs')
      }
  }, [])

  return (
    <div className="App">
      <div className="header">
        <Header breakpoint={breakpoint} />
      </div>
      <div className="content">
        <Content breakpoint={breakpoint} />
      </div>
      <div className="footer">
        <Footer breakpoint={breakpoint} />
      </div>
    </div>
  );
}

export default App;
