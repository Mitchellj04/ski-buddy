import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import TrailsList from './TrailsList';
import { useParams} from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Accordion, AccordionSummary, Typography, AccordionDetails, Box, Paper, Button, TextField} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comments from './Comments';
const MountainCard = ({mountains, currentUser}) => {

    const [showMountain, setShowMountain] = useState('')
    const [showTrails, setShowTrails] = useState([])
    const [showComments, setShowComments] = useState([])
    const {id} = useParams();
    const [hideEditTrail, setHideEditTrail] = useState(false)  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')

    // const [newComment, setNewComment] = useState({})
    // const [user_id, setUser_id] = useState('')

    const handleTaskOpen = () => {setHideEditTrail(true)}
    const handleTaskClose = () => {setHideEditTrail(false)}

    const paperStyle ={
      padding: '30px 20px',
      width: "75%", 
      margin: '20px auto',
      paddingTop: 50

  }
  const commentStyle ={
    padding: '10px 10px',
    width: 400, 
    margin: '10px auto'
}

    useEffect(() => {
        fetch(`/mountains/${id}`)
        .then((resp) => resp.json())
        .then((mountain) => {setShowMountain(mountain)
        setShowTrails(mountain.trails)
        setShowComments(mountain.comments)})
    }, [id])


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


    const trailMap = showTrails.map((trail) => <TrailsList trail={trail} key={trail.id}/>)
    const commentMap = showComments.map((comments) => <Comments key={comments.id} comments={comments} currentUser={currentUser} showComments={showComments} setShowComments={setShowComments}/>)

  return (
    <>
      <Box>
        <Paper style={paperStyle}>
          <div>
            {/* <h1>Moutain</h1> */}
            <Typography variant='h2' fontWeight={"Bold"} style={{ textAlign: "center" }}>{showMountain.name}</Typography>
            <img src={showMountain.image_url}></img>
            <p>Number of Trails: {showMountain.number_trails}</p>
            <p>Number of Lists: {showMountain.number_lifts}</p>
            <p>Mountain Summit Elevation: {showMountain.elevation} ft</p>
            <Accordion className="Accordion-side" style={{ width: "100%", color: "white", backgroundColor: "#5ea4ff"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography style={{color: "white"}}>Trail List</Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#b4bcc5"}}>
                <div>
                <Typography variant='h6'>Trail Details: </Typography>
                  {trailMap}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Box>
      <Box>
        <Paper style={paperStyle}>
          <div>
            <Button className='comment-button' onClick={handleTaskOpen} startIcon={<AddCircleOutlineIcon />}></Button>
            <Dialog
              open={hideEditTrail}
              keepMounted
              onClose={handleTaskClose}
              maxWidth="lg">
              <DialogTitle>Create Comment</DialogTitle>
              <DialogContent>
                <TextField
                  fullWidth
                  label="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}/>
              </DialogContent>
              <DialogContent style={commentStyle}>
                <TextField
                  fullWidth
                  label="description"
                  name="description"
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} />
              </DialogContent>
              <DialogContent>
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
            </Dialog>
            <Typography variant='h4'>Comments:</Typography>
            {commentMap}
          </div>

        </Paper>
      </Box>



    </>
  )
}

export default MountainCard