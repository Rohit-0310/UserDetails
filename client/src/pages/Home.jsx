import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from './NavBar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


//   const useStyles = makeStyles({
//       table: {
//           marginTop:100,
//           minWidth: 900,
//       }
//   })

const Home = () => {
    // const classes = useStyles()

    let dispatch = useDispatch();
    const navigate = useNavigate()


    const {users} = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(loadUsers())
    }, [])

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this user?')){
            dispatch(deleteUser(id));
            
        }
    }

    // const handlAddUser = () => {
    //     navigate("/addUser")
    // }


    const handleEdit = (pid) => {
        navigate(`/edit/${pid}`)
    }

    const handleView = (pid) => {
        navigate(`/userdetail/${pid}`)
    }


    return (
        <div>
            <NavBar />
            {/* <div>
                <Button style={{width:"150px", marginTop:"20px"}} onClick={()=>handlAddUser()} color="secondary" variant="outlined">Add User</Button>
            </div> */}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, marginTop:5 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Mobile No.</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>

            {/* <StyledTableCell align="center">Action</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell width="3%" component="th" scope="row">{user.id}</StyledTableCell>
              <StyledTableCell width="17%" align="left">{user.username}</StyledTableCell>
              <StyledTableCell width="17%" align="left">{user.email}</StyledTableCell>
              <StyledTableCell width="17%" align="left">{user.gender}</StyledTableCell>
              <StyledTableCell width="17%" align="left">{user.mobile}</StyledTableCell>
              <StyledTableCell width="17%" align="left">{user.address}</StyledTableCell>


              <StyledTableCell width="3%" align="left">
                <DeleteIcon color='error' onClick={()=>handleDelete(user.id)} />
              </StyledTableCell>

              <StyledTableCell width="3%" align="left">
                <EditIcon color='primary' onClick={()=>handleEdit(user.id)}/>
              </StyledTableCell>

              <StyledTableCell width="3%" align="left">
                <VisibilityIcon color='error' onClick={()=>handleView(user.id)}/>
              </StyledTableCell>

              {/* <StyledTableCell align="center">
                <ButtonGroup variant="text" aria-label="text button group">

                <DeleteIcon color='error' onClick={()=>handleDelete(user.id)} />
                <EditIcon color='primary' onClick={()=>handleEdit(user.id)}/>
                <VisibilityIcon />
                  
                  <Button 
                    onClick={()=>handleDelete(user.id)}
                  >Delete</Button>
                  
                  <Button onClick={()=>handleEdit(user.id)}>Edit</Button>
                  <Button>View</Button>
                </ButtonGroup>
              </StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Home