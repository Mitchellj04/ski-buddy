import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const SignUp = ({setCurrentUser, currentUser}) => {
    const [username, setUsername] = useState('')
    // const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [newProfile, setNewProfile] = useState()
    const [value, setValue] = useState("Beginner")
    const [experience_level, setExperience]= useState('')

    const paperStyle ={
        padding: '30px 20px',
        width: 400, 
        margin: '20px auto'
    }


    const handleExperience = (e) => {setExperience(e.target.value)}
    console.log(experience_level)

   function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username, 
            password, 
            name,
            age,
            experience_level
        }
        fetch('/users',{
            method: "POST", 
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then((user) => setCurrentUser(user));
                console.log(currentUser)
            }
            else {
                resp.json().then((err) => console.log(err))
            }
        })
   }


  return (
      <>
          <Grid>
              <Paper elevation={20} style={paperStyle}>
                  <Grid align='center'>
                      <Avatar>

                      </Avatar>
                      <h2>Sign Up</h2>
                      <Typography variant='caption'>Please sign up below!</Typography>
                  </Grid>
                  <form onSubmit={handleSubmit}>
                      <TextField 
                        fullWidth 
                        label="username"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}/>
                      <TextField 
                        fullWidth 
                        label="name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                      <TextField 
                        fullWidth 
                        label="age" 
                        type="number"
                        value={age} 
                        onChange={(e) => setAge(e.target.value)}/>
                      <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">Experience Level</FormLabel>
                          <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="Beginner"
                              name="radio-buttons-group"
                              style={{ display: 'initial' }}
                              onChange={handleExperience}>
                              <FormControlLabel value="Beginner" control={<Radio />} label="Beginner" />
                              <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
                              <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
                          </RadioGroup>
                      </FormControl>
                      <TextField 
                        fullWidth 
                        type="password"
                        label="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                      <Button variant="contained" type="submit" color="primary">Sign Up</Button>
                  </form>
              </Paper>
          </Grid>
    </>
  )
}

export default SignUp