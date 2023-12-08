import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
        </Routes>
    </div>
    </Router>
  )
}

export default App
