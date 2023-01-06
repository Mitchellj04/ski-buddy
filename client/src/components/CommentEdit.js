import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

const CommentEdit = ({comments, showComments, setShowComments, setHideEdit}) => {

    const [editComment, setEditComment] = useState(comments)

    const handleChange = (e) => {setEditComment({...comments, [e.target.name]: e.target.value})}

    const handleEdit = (editor) => {
        fetch(`/comments/${editor.id}`, {
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
        .then((resp) => console.log(resp))
    }

    const updatingComment = (change) => {
        handleEdit(change)

        const updatedComment = showComments.map((edit) =>
        edit.id === change.id ? change : edit)
    }

    const handleSubmit = () => {
        updatingComment(editComment)
        setHideEdit(false)
    }

    // console.log(editComment)
  return (
    <div>
        <form>
            <TextField value={editComment.title} name='title' onChange={handleChange}/>
            <TextField value={editComment.description} name='description' onChange={handleChange}/>
            <TextField value={editComment.rating} name='rating' onChange={handleChange}/>
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
    </div>
  )
}

export default CommentEdit