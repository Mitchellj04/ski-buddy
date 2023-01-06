import React, { useEffect, useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Accordion, AccordionSummary, Typography, AccordionDetails, Box, Paper, Button, TextField} from '@mui/material';

const CreateComment = (
    {setShowComments, 
        currentUser, 
        showMountain,
        setHideEditTrail,
        handleTaskClose}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')


    const commentSubmit = (e) => {
        e.preventDefault()
        const newComment = {
          title,
          description,
          rating,
          user_id: currentUser.id, 
          mountain_id: showMountain.id
        }
        fetch('/comments', {
          method: "POST",
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newComment)
        })
        .then((resp) => resp.json())
        .then((data) => setShowComments((prevState) => [...prevState, data]))
        setHideEditTrail(false)
      }

  return (
    <Box>
        <DialogContent>
            <TextField
                fullWidth
                label="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            <TextField
                fullWidth
                label="description"
                name="description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)} />
            <TextField 
                fullWidth
                type="number"
                label="rating"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}/>     
        </DialogContent>
        <Button color='primary' variant='contained' style={{width: "25%"}} onClick={commentSubmit}>Submit</Button>
        <DialogActions>
            <Button onClick={handleTaskClose}>Close</Button>
        </DialogActions>
    </Box>
  )
}

export default CreateComment