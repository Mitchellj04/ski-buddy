import React, { useState } from 'react'
import '../App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper, Typography, Box, TextField, Alert } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ProfileMountain from './ProfileMountain';

const Profile = ({currentUser, setCurrentUser}) => {

    const [hideEditTrail, setHideEditTrail] = useState(false)
    const [profile, setProfile] = useState(currentUser)
    const [value, setValue] = useState(profile.experience_level)

    const handleTaskOpen = () => {setHideEditTrail(true)}
    const handleTaskClose = () => {setHideEditTrail(false)}

    console.log(currentUser)
  const paperStyle ={
      padding: '30px 20px',
      width: 400, 
      margin: '20px auto'
  }
  const profileStyle ={
    padding: '30px 20px',
    width: 600, 
    margin: '20px auto',
    textAlign: "left"
}
  const fieldStyle = {
    margin: '5px auto'
  }
  const boxStyle = {
    paddingTop: "100px",
    width: 500, 
    margin: '20px auto'

  }

  const textStyle = {
    paddingTop: 10
  }

  const handleChange = (e) => {setProfile({...profile, [e.target.name]: e.target.value})}
  const handleExperience = (e) => {setValue(e.target.value)}


  const handleEditSubmit = (e) => {
    e.preventDefault()
    const updatedUser = {
      username: profile.username,
      name: profile.name,
      age: profile.age,
      experience_level: value,
      bio: profile.bio
    }
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
    .then((resp) => resp.json())
    .then((user) => {setCurrentUser(user) 
      setHideEditTrail(false)
    })
  }

  function addBio() {
    if(currentUser.bio === "Please add a bio"){
      return <Alert severity='info'>Please Add a Bio</Alert>
    }
    else {
      return currentUser.bio
    }
  }

  // const mountainComments = currentUser.map((comment) => comment.mountains)
  const [userMountain, setUserMountain] = useState([currentUser])

  const mountainComments = userMountain.map((user) => <ProfileMountain user={user}/>)



  return (
    <Box style={boxStyle}>
        <AccountCircleIcon />
        <Button className='task-button-edit' onClick={handleTaskOpen}  startIcon={<EditIcon className='editButton'/>}></Button>
        <Dialog
        open={hideEditTrail}
        keepMounted
        onClose={handleTaskClose}
        maxWidth="lg">
          <form onSubmit={handleEditSubmit}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent style={paperStyle}>
            <TextField
                fullWidth 
                label="username"
                name="username"
                style={fieldStyle}
                value={profile.username} 
                onChange={handleChange}/>
            <TextField
                fullWidth 
                label="name"
                name="name"
                style={fieldStyle}
                value={profile.name} 
                onChange={handleChange}/>
           <TextField
                fullWidth 
                type={"number"}
                label="age"
                name="age"
                style={fieldStyle}
                value={profile.age} 
                onChange={handleChange}/>
          <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Experience Level</FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Beginner"
                  name="radio-buttons-group"
                  style={{ display: 'initial' }}
                  onChange={handleExperience}>
                  <FormControlLabel value={"Beginner"} name="experience" id={'Beginner'} control={<Radio />} label="Beginner" />
                  <FormControlLabel value={"Advanced"} name="experience" id={'Advanced'} control={<Radio />} label="Advanced" />
                  <FormControlLabel value={"Expert"} name="experience" id="Expert" control={<Radio />} label="Expert" />
              </RadioGroup>
          </FormControl>
          <TextField
                fullWidth 
                type={"text"}
                label="bio"
                style={fieldStyle}
                name="bio"
                value={profile.bio} 
                onChange={handleChange}/>
         
          </DialogContent>
          
          <DialogActions>
            <Button type="submit">Submit</Button>
            <Button onClick={handleTaskClose}>Close</Button>
          </DialogActions>
           </form>
      </Dialog>  
      <Box styler={{alignItems: 'center', textAlign: 'center', width: 500}}>
        <Paper style={profileStyle}>
        <Typography style={textStyle} fontWeight="Bold">Username:<Typography>{currentUser.username}</Typography></Typography>
        <Typography style={textStyle} fontWeight="Bold">Name: <Typography>{currentUser.name}</Typography></Typography>   
        <Typography style={textStyle} fontWeight="Bold">Age: <Typography>{currentUser.age}</Typography></Typography>
        <Typography style={textStyle} fontWeight="Bold">Skill Level: <Typography>{currentUser.experience_level}</Typography></Typography>
        <Typography style={textStyle} fontWeight="Bold">Bio: <Typography>{addBio()}</Typography></Typography>
        </Paper>
      </Box>

    <Box>
      <Paper>
        <Typography>Commented Mountains:</Typography>
        <Typography>{mountainComments}</Typography>
      </Paper>
    </Box>
    </Box>
  )
}

export default Profile