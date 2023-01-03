import React, { useState } from 'react'
import '../App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper, Typography, Box, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Profile = ({currentUser}) => {

    const [hideEditTrail, setHideEditTrail] = useState(false)

    const handleTaskOpen = () => {setHideEditTrail(true)}
    const handleTaskClose = () => {setHideEditTrail(false)}
    const paperStyle ={
      padding: '30px 20px',
      width: 400, 
      margin: '20px auto'
  }
  const fieldStyle = {
    margin: '5px auto'
  }
  const boxStyle = {
    paddingTop: "100px",
    width: 500, 
    margin: '20px auto'

  }
   
    console.log(currentUser)
  return (
    <Box style={boxStyle}>
        <AccountCircleIcon />
        <Button className='task-button-edit' onClick={handleTaskOpen}  startIcon={<EditIcon className='editButton'/>}></Button>
        <Dialog
        open={hideEditTrail}
        keepMounted
        onClose={handleTaskClose}
        maxWidth="lg">
          <DialogTitle>Edit Profile</DialogTitle>

          <DialogContent style={paperStyle}>
            <TextField
                fullWidth 
                label="username"
                style={fieldStyle}
                // value={username} 
                onChange={(e) => console.log(e)}/>
            <TextField
                fullWidth 
                label="name"
                style={fieldStyle}
                // value={username} 
                onChange={(e) => console.log(e)}/>
           <TextField
                fullWidth 
                type={"number"}
                label="age"
                style={fieldStyle}
                // value={username} 
                onChange={(e) => console.log(e)}/>
          <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Experience Level</FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Beginner"
                  name="radio-buttons-group"
                  style={{ display: 'initial' }}>
                  <FormControlLabel value="Beginner" control={<Radio />} label="Beginner" />
                  <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
                  <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
              </RadioGroup>
          </FormControl>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleTaskClose}>Close</Button>
          </DialogActions>
      </Dialog>  
      <Box styler={{alignItems: 'center', textAlign: 'center', width: 500}}>
        <Paper>
        <Typography>Username: {currentUser.username} </Typography>
        <p>Name: {currentUser.name}</p>   
        <p>Age: {currentUser.age}</p>
        <p>Skill Level: {currentUser.experience_level}</p>
        <p>Bio: {currentUser.bio}</p>
        </Paper>
      </Box>

    </Box>
  )
}

export default Profile