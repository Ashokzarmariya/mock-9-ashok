
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='/' element={<HomePage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
