import { Box, Button, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import { useState } from 'react';

const Comments = ({comments, currentUser}) => {

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
                onClick={(e) => console.log(e)}>
            </Button>
            <Button 
                size="small" 
                variant="contained" 
                startIcon={<EditIcon />}  
                value="projects"
                color="primary" 
                onClick={(e) => console.log(e)}/>
            </>

        }
        else{

        }
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