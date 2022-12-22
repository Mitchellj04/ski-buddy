import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const Profile = ({currentUser}) => {

    const [hideEditTrail, setHideEditTrail] = useState(false)

    const handleTaskOpen = () => {setHideEditTrail(true)}
    const handleTaskClose = () => {setHideEditTrail(false)}
   
    console.log(currentUser)
  return (
    <div>
        <AccountCircleIcon /><Button className='task-button-edit' onClick={handleTaskOpen}  startIcon={<EditIcon/>}></Button>
        <Dialog
        open={hideEditTask}
        keepMounted
        onClose={handleTaskClose}
        maxWidth="lg">
          <DialogTitle>Edit Profile</DialogTitle>

          <DialogContent>
            <p>Username</p>
            <p>Name</p>
            <p>Age</p>
            <p>Skill</p>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleTaskClose}>Close</Button>
          </DialogActions>
      </Dialog>  
        <p>Username: {currentUser.username}</p>
        <p>Name: {currentUser.name}</p>   
        <p>Age: {currentUser.age}</p>
        <p>Skill Level: {currentUser.experience_level}</p>
        <p>Bio: {currentUser.bio}</p>
    </div>
  )
}

export default Profile