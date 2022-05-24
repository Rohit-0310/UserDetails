import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home'
import UserDetail from './pages/UserDetail';
import { ToastContainer } from 'react-toastify';
function App() {
    return (
      <div className="App">
        {/* <h1>Welcome</h1> */}
        <ToastContainer 
        // theme="dark"  
        />

        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/adduser"} element={<AddUser />} />
            <Route path={"/userdetail/:id"} element={<UserDetail />} />
            <Route path={"/edit/:id"} element={<EditUser />} />
        </Routes>
      </div>
    );
}

export default App;
