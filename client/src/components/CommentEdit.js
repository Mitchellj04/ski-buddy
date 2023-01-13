import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const CommentEdit = ({comments, showComments, setShowComments, setHideEdit, updatingComment}) => {

    const [editComment, setEditComment] = useState(comments)

    const handleChange = (e) => {setEditComment({...editComment, [e.target.name]: e.target.value})}

    function updatingComment(change){
        setHideEdit(false)
        const updatedComment = showComments.map((edit) =>{
             if(edit.id === change.id){
                return change
             }
             else{
                return edit
             }
        })
        setShowComments(updatedComment)
    }

   function handleEdit(e){
        console.log(e)
        e.preventDefault()
        const editor ={
            title: editComment.title,
            description: editComment.description,
            rating: editComment.rating
        }
        fetch(`/comments/${editComment.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: editor.title,
                description: editor.description,
                rating: editor.rating
            })
        })
        .then((resp) => resp.json())
        .then((resp) => updatingComment(resp))
    }





    // const handleSubmit = () => {
    //     console.log(updatingComment(updatedComment))
    //     // setHideEdit(false)
    // }


  return (
    <div>
        <form onSubmit={handleEdit}>
            <TextField 
                value={editComment.title} 
                name='title' 
                onChange={handleChange}/>
            <TextField 
                value={editComment.description} 
                name='description' 
                onChange={handleChange}/>
            <TextField
                value={editComment.rating} 
                name='rating' 
                onChange={handleChange}/>
            <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default CommentEdit