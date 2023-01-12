import { Paper, Grid, Typography, Avatar, TextField, Button, Error} from '@mui/material'
import React, { useState } from 'react'

const LoginForm = ({setCurrentUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    // const [login, setLogin] = useState('')
    const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '20px auto'
    }
    const fieldStyle = {
        margin: '5px auto'
      }

    // const handleSignUp = () => {
    //     // navigate("/signup")
    // }

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
            else{
                resp.json().then((error) => setErrors(error))
            }
        })
   }
   
console.log()
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
            <form onClick={handleSubmit}>
            <TextField 
                fullWidth 
                label="username"
                value={username} 
                style={fieldStyle}
                onChange={(e) => setUsername(e.target.value)}/>
            <TextField 
                fullWidth 
                type="password"
                label="password"
                style={fieldStyle}
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
            {errors.map((error) => (
                <Error>{error}</Error>
            ))}
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