
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
