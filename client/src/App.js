import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Student from './pages/Student';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/sign-in" element={<Signin />} />
       <Route path="/sign-up" element={<Signup />} />
       <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/student' element={<Student />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
