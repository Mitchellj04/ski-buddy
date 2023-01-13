import { Paper, Grid, Typography, Avatar, TextField, Button, FormControl, Alert} from '@mui/material'
import React, { useState } from 'react'

const LoginForm = ({setCurrentUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    // const [login, setLogin] = useState('')
    const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '20px auto'
    }
    const fieldStyle = {
        margin: '5px auto'
      }


   function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username, 
            password
        }
        fetch("/login",{
            method: "POST", 
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then((user) => setCurrentUser(user))
            }
            else{
                resp.json().then((errors) => setErrors(errors.error))
            }
        })
   }
   
// console.log(errors.error)
//    console.log(username)
//    console.log(password)

  return (
    <>
    <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid>
            <Avatar>
            </Avatar>
            <h2>Login</h2>
            <Typography>Please Login below</Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <FormControl>
            <TextField 
                fullWidth 
                label="username"
                value={username} 
                style={fieldStyle}
                onChange={(e) => setUsername(e.target.value)}/></FormControl>
                <FormControl>
            <TextField 
                fullWidth 
                type="password"
                label="password"
                style={fieldStyle}
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" type="submit" color="primary">Login</Button></FormControl>
                {errors.map((err) => <Alert severity='error'>{err}</Alert>)}
            </form>
        </Paper>
    </Grid>
    </>
  )
}

export default LoginForm