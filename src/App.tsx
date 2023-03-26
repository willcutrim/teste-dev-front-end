
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { Home } from './screens/Home'
import { Post } from './screens/Post';
import { UserDetails } from './screens/UserDetails';
import { AllUsers } from './screens/AllUsers';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/user-details' element={<UserDetails />} />
        <Route path='/usuarios' element={<AllUsers />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
