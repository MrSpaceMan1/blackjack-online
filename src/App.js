import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import RegisterForm from './components/login/RegisterForm';
import RoomsList from './components/room/RoomsList';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/register">Zarejestruj się</Link>
      </nav>
      <Routes>
        <Route path='/' element={<RoomsList />}>
          <Route path='register' element={<RegisterForm />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
