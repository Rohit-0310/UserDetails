import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const NavBar = () => {

    const navigate = useNavigate()

    const handlAddUser = () => {
    const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 1000));
        toast.promise(
            resolveAfter2Sec,
            {
              pending: 'Loading Add User Page!',
              success: 'Loading Add User Page successfully👌',
              error: 'Loading Add User Page rejected 🤯'
            }
        )
        setTimeout(() => {
            navigate("/adduser")
          }, 1000)
    }

    const handlHome = () => {
        const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 1000));
        toast.promise(
            resolveAfter2Sec,
            {
              pending: 'Loading Home Page!',
              success: 'Loading Home Page successfully👌',
              error: 'Loading Home Page rejected 🤯'
            }
        )
        setTimeout(() => {
            navigate("/")
          }, 1000)
    }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:'red' }}>
    <AppBar sx={{backgroundColor:'#050537',color:'#ede6e6' }} position="static">
      <Toolbar>
      <Button onClick={()=>handlHome()} color="inherit">Home Page</Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User
        </Typography>
        <Button onClick={()=>handlAddUser()} color="inherit">Add User</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar