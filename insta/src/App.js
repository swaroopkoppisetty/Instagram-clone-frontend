import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';

function App() {
  return (
    <div className="App">
        <Router>
        
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          
          <Route exact path='/signup' element ={<SignUp />} />

         
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
