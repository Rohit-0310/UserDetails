import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addUser, editUser, getSingleUser } from '../redux/actions';
import NavBar from './NavBar';




const EditUser = () => {

    
    const navigate = useNavigate()

    const [state, setState] = useState({
      username: "",
      email: "",
      gender: "",
      mobile: "",
      address: ""
    })
    const dispatch = useDispatch()

    // const [error, setError] = useState("")
    const {id} = useParams({})
    const {user} = useSelector((state)=> state.data);

    const handleInputChange = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }

    useEffect(()=>{
        dispatch(getSingleUser(id))
    },[])

    useEffect(()=>{
        if(user){
            setState({...user})
        }

    },[user])

    const handleSubmit = (e) => {
        e.preventDefault();

        const resolveAfter2Sec = new Promise(resolve => setTimeout(resolve, 2000));
        if(!username || !email || !gender || !mobile || !address){
            // setError("Plaese Enter All The Input field")
            return toast.error("Plaese Enter All The Input field")
        } else {
            // if(window.confirm('Are you sure you want to Update the User?')){
                dispatch(editUser(state, id))
                // toast.success("User details updated successfully",);
                toast.promise(
                    resolveAfter2Sec,
                    {
                      pending: 'User Update pending',
                      success: 'User Update successfully👌',
                      error: 'Promise rejected 🤯'
                    }
                )
                setTimeout(() => {
                    navigate("/")
                }, 2000)
                // setError("")
            // }
        }
    }

    // if(window.confirm('Are you sure you want to Update the User?')){
    //     navigate("/")            
    // }

    const handleInputCancle = () =>{
        if(window.confirm('Are you sure you want to cancel the Update?')){
            navigate("/")            
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
        <h2>Update User</h2>
        
        {/* {error && <h2><Stack align="center" sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{error}</Alert>
        </Stack></h2>} */}

        
            <Box onSubmit={handleSubmit}
                component="form"
                    sx={{
                       '& > :not(style)': { m: 1, width: '65ch' },
                    }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="username" value={username || ''} type="text"  label="username"  /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="email" value={email || ''}  type="text"        multiline  label="email" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="gender" value={gender || ''} type="text"     multiline  label="gender" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="mobile" value={mobile || ''} type="number"     multiline  label="mobile" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="address" value={address || ''} type="text"   multiline  label="address" /><br/>


                {/* <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="userId" value={userId || ''} type="number"  label="UserId"  /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="title"  value={title || ''}  type="text"    label="Title" multiline /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="body"   value={body || ''}   type="text"   label="Body" multiline /><br/> */}
                {/* <TextareaAutosize aria-label="empty textarea" placeholder="Body"
                onChange={handleInputChange}  variant="standard" id="standard-basic" name="body" value={body}   type="text"    label="Body"
                //  style={{ width: 200 }}
                    /><br /> */}

                <Button    onClick={handleInputCancle}   style={{width:"150px"}} type="submit"  color="secondary" variant="outlined">Cancel</Button>
                <Button    onChange={handleInputChange}   style={{width:"150px"}} type="submit"  color="secondary" variant="outlined">Update</Button>
            </Box>
            
      </div>
    )
}

export default EditUser;