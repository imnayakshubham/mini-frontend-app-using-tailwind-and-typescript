import './App.css'
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Posts } from './components/Posts/Posts';
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/signup" element={<><Signup /></>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </>
  )
}

export default App
