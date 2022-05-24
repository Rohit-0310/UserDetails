import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import { addUser } from '../redux/actions';
import NavBar from './NavBar';




const AddUser = () => {

    
    const navigate = useNavigate()

    const [state, setState] = useState({
        username: "",
        email: "",
        gender: "",
        mobile: "",
        address: ""
    })
    const dispatch = useDispatch()

    const [error, setError] = useState("")

    const handleInputChange = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }
    // const notify = () => toast("Plaese Enter All The Input field");

    const handleSubmit = (e) => {
        e.preventDefault();
        const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 2000));
        if(!username || !email || !gender || !mobile || !address){
            // setError("Plaese Enter All The Input field")
            return toast.warn("Plaese Enter All The Input field")
        } else {
            dispatch(addUser(state))
            toast.promise(
                resolveAfter2Sec,
                {
                  pending: 'User Add pending',
                  success: 'User Added successfully👌',
                  error: 'Promise rejected 🤯'
                }
            )
            setTimeout(() => {
                navigate("/")
            }, 2000)
            setError("")
        }
    }

    // const handlHome = () => {
    //     navigate("/")
    // }

    const {username, email, gender, mobile, address} = state;
    return (
      <div>
          <NavBar />
          {/* <Button onClick={()=>handlHome()} style={{width:"150px", marginTop:"20px"}} type="submit"  color="secondary" variant="outlined">Home Page</Button> */}
        <h2>Add User</h2>


        {/* <button onClick={notify}>Notify!</button> */}

        {/* <ToastContainer /> */}
        {error && <h2><Alert severity="error">{error}</Alert></h2>}
            <Box onSubmit={handleSubmit}
                component="form"
                    sx={{
                       '& > :not(style)': { m: 1, width: '65ch' },
                    }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="username" value={username} type="text"  label="username"  /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="email" value={email}  type="text"        multiline  label="email" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="gender" value={gender}   type="text"     multiline  label="gender" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="mobile" value={mobile}   type="number"     multiline  label="mobile" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="address" value={address}   type="text"   multiline  label="address" /><br/>

                <Button    onChange={handleInputChange}   style={{width:"150px"}} type="submit"  color="secondary" variant="outlined">Submit</Button>
            </Box>
            
      </div>
    )
}

export default AddUser