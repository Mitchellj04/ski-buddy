import React, {  useState } from 'react'
import { DialogActions, DialogContent, Box, Button, TextField} from '@mui/material';

const CreateComment = (
    {setShowComments, 
        currentUser, 
        showMountain,
        setHideEditComment,
        handleCommentClose}) => {

    //Comment params
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')

    //Styling
    const fieldStyle = {
        margin: '5px auto'
      }
    const buttonStyle = {
        width: 10,
        margin: '5px auto'
    }


    //Submit new comment
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
        setHideEditComment(false)
      }

  return (
    <Box>
        <DialogContent>
            <TextField
                fullWidth
                label="title"
                name="title"
                value={title}
                style={fieldStyle}
                onChange={(e) => setTitle(e.target.value)}/>
            <TextField
                fullWidth
                type="textbox"
                label="description"
                name="description"
                value={description} 
                style={fieldStyle}
                onChange={(e) => setDescription(e.target.value)} />
            <TextField 
                fullWidth
                type="number"
                label="rating"
                name="rating"
                value={rating}
                style={fieldStyle}
                onChange={(e) => setRating(e.target.value)}/>     
        </DialogContent>
        <Button color='primary' variant='contained' style={buttonStyle} onClick={commentSubmit}>Submit</Button>
        <DialogActions>
            <Button onClick={handleCommentClose}>Close</Button>
        </DialogActions>
    </Box>
  )
}

export default CreateComment