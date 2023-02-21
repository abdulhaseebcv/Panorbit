import './App.css';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom'
import Posts from './Components/Post/Posts';
import Gallery from './Components/Gallery/Gallery';
import ToDo from './Components/ToDo/ToDo';
import Profile from './Components/Profile.js/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/Panorbit' element={<Login />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/todo' element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
