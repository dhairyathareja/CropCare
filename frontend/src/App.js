
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Logout from './Pages/Logout';
import SignUp from './Pages/SignUp';
import Detector from './Pages/Detector';
import ChatBot from './Pages/ChatBot';

import { useSelector } from 'react-redux';


function App(){

  const userData=useSelector(store=>store.userReducer);
  
  return (
    <div className='App'>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          {userData.isLoggedIn ? <Route path='/logout' element={<Logout/>}/> : <Route path='/logout' element={<Login/>}/> }
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          {userData.isLoggedIn ? <Route path='/detector' element={<Detector/>}/> : <Route path='/detector' element={<Login/>}/> }
          {userData.isLoggedIn ? <Route path='/chatBot' element={<ChatBot/>}/> : <Route path='/chatBot' element={<Login/>}/> }

        </Routes>
    </div>
  );
}

export default App;