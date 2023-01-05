import { Box, Button, Paper, Typography } from '@mui/material'
import CommentEdit from './CommentEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import React from 'react'
import { useState } from 'react';

const Comments = ({comments, currentUser, showComments, setShowComments}) => {

    const [hideEdit, setHideEdit] = useState(false)
    const handleClickOpen = () => {setHideEdit(true);};
    const handleClose = () => {setHideEdit(false);};
    console.log(comments)
    
    const paperStyle ={
        padding: '30px 20px',
        width: "100%", 
        margin: '20px auto',
        paddingTop: 50
  
    }

    function showButton(){
        if (currentUser.id === comments.user_id){
            return <>
            <Button 
                style={{width: "10px", textAlign: "center"}}
                size="small" 
                variant="contained" 
                startIcon={<DeleteIcon />}  
                value="projects"
                color="secondary" 
                onClick={handleDelete}>
            </Button>
            <Button 
                size="small" 
                variant="contained" 
                startIcon={<EditIcon />}  
                value="projects"
                color="primary" 
                onClick={handleClickOpen}/>
            <Dialog
                open={hideEdit}
                keepMounted
                onClose={handleClose}>
                <DialogTitle>Edit Comment</DialogTitle>
                <DialogContent><CommentEdit comments={comments} showComments={showComments} setShowComments={setShowComments}/></DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            </>

        }
        else{

        }
    }

    function handleDeleteComment(deleted){
        const filterDelete = showComments.filter((comment) => {
          if (comment.id !== deleted.id) {
            return comment
          } else {
            return null
          }
        });
        setShowComments(filterDelete);
      }

    function handleDelete(){
        fetch(`/comments/${comments.id}`, {
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        handleDeleteComment(comments.id)
        console.log(comments.id)
    }
  return (
    <Box>
        <Paper style={paperStyle}>
        <Typography variant='h5' fontWeight={"Bold"} style={{paddingBottom: 10}}>{comments.title}</Typography>
        <Typography>{comments.description}</Typography>
        <Typography>{comments.rating}</Typography>
        {showButton()}
        </Paper>
    </Box>
  )
}

export default Comments