import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const ProfileMountain = ({user, userComments}) => {
    const [mountain, setMountain] = useState(user)
    const [comments, setComments] = useState()

    console.log(user.id)

    const commentMap = userComments.map((comment) => {
        if (comment.mountain_id === user.id){
            return <><Typography>"{comment.description}"</Typography>
            <Typography>Rating:{comment.rating}</Typography></>
            
        }
        else{
            <Alert>No comments for this mountain.</Alert>
        }
    })
    
  return (
    <>
        <Box>
           <Typography variant="h4">{mountain.name}</Typography>
           <Typography>Comment:</Typography>{commentMap}
        </Box>
        
    </>
  )
}

export default ProfileMountain