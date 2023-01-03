import { Paper, Grid, Typography, Avatar, TextField, Button} from '@mui/material'
import React, { useState } from 'react'

const LoginForm = ({setCurrentUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '20px auto'
    }


    const handleSignUp = () => {
        // navigate("/signup")
    }

   function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username, 
            password
        }
        fetch('/login',{
            method: "POST", 
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(setCurrentUser)
            }
        })
   }

   console.log(username)
   console.log(password)

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
            <form onClick={handleSubmit}>
            <TextField 
                fullWidth 
                label="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>
            <TextField 
                fullWidth 
                label="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" type="submit" color="primary">Login</Button>
            </form>
        </Paper>
    </Grid>
    {/* <form onClick={handleSubmit}>
        <li>Username:<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input></li>
        <li>Password:<input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input></li>
        <button type='submit' value={"login"} onClick={() => setLogin(true)}>Login</button>
    </form>     */}
    </>
  )
}

export default LoginForm