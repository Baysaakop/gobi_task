import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default App;
