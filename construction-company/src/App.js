
import './styles/App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';

function App() {
  return (

    <BrowserRouter>

      <Routes>

      <Route exact path='/' element={<HomePage/>}/>

      </Routes>

    
    
    </BrowserRouter>



  );
}

export default App;