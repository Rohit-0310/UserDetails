import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { getSingleUser } from '../redux/actions';
import NavBar from './NavBar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const UserDetail = () => {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [state, setState] = useState({
        userId: "",
        title: "",
        body: "",
    })

    // const [error, setError] = useState("")
    const {id} = useParams({})
    const {user} = useSelector((state)=> state.data);

    useEffect(()=>{
        dispatch(getSingleUser(id))
        
    },[])

    useEffect(()=>{
        if(user){
            setState({...user})
        }
    },[user])

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
    <div>
        <NavBar />
        <h2>UserDetail</h2>
        {/* <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Box>
                <Typography variant="h3" component="div" gutterBottom>
                    Id {state.id}
                    </Typography>
                <Typography variant="h3" component="div" gutterBottom>
                    UserId {state.userId}
                </Typography>
            </Box>
        </Box> */}

        <Box sx={{ width: '50%',  margin: "0 auto", textAlign:'left'}}>
            <Stack spacing={2}>
                <Box sx={{display: 'flex',  m: 1, justifyContent: 'space-between'}}>
                    <Item sx={{textAlign:'left', fontSize:"20px", width:'100%', p:3}} >Id:- <br/><b style={{color:'red'}}>{state.id}</b></Item>
                    <Item sx={{textAlign:'left', fontSize:"20px", width:'100%', p:3}} >Name:- <br/><b style={{color:'#795548'}}>{state.username}</b></Item>
                </Box>
                <Box sx={{display: 'flex',  m: 1, justifyContent: 'space-between'}}>
                    <Item sx={{textAlign:'left', fontSize:"20px", width:'100%', p:3}} >Email:- <br/><b style={{color:'#795548'}}>{state.email}</b></Item>
                    <Item sx={{textAlign:'left', fontSize:"20px", width:'100%', p:3}} >Gender:- <br/><b style={{color:'#795548'}}>{state.gender}</b></Item>
                </Box>
              <Item sx={{textAlign:'left', fontSize:"20px" , m: 1, p:3}} >Mobile No:- <br/><b style={{color:'#795548'}}> {state.mobile}</b></Item>
              <Item sx={{textAlign:'left', fontSize:"20px" , m: 1, p:3}} >Address:- <br/><b style={{color:'#795548'}}> {state.address}</b></Item>
            </Stack> 
            <Button onClick={()=>handlHome()} style={{width:"150px", marginTop:"20px"}} type="submit"  color="secondary" variant="outlined">Home Page</Button>
        </Box>
        

               
    </div>
  )
}

export default UserDetail;