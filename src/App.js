import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/login/RegisterForm';
import RoomsList from './components/room/RoomsList';
import Navbar from './components/Navbar'
import ProfilePage from './components/profile/ProfilePage';
import ProfileList from './components/profile/ProfileList';
import Room from './components/room/Room';
import LoginForm from './components/login/LoginForm';


function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<RoomsList />} />
        <Route path='/room/:id' element={<Room />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/profile/search" element={<ProfileList />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
