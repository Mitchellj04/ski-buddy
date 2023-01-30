import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import TrailsList from './TrailsList';
import { useParams } from 'react-router-dom';
import { Dialog, DialogTitle, Accordion, AccordionSummary, Typography, AccordionDetails, Box, Paper, Button} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comments from './Comments';
import CreateComment from './CreateComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faDiamond, faSnowplow, faSquare, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import TrailCreate from './TrailCreate';


library.add(faSnowplow, faDiamond, faSquare, faCircle, faSnowflake)


const MountainCard = ({ currentUser }) => {

  //All data (Mountains,Trails,Comments)
  const [showMountain, setShowMountain] = useState('')
  const [showTrails, setShowTrails] = useState([])
  const [showComments, setShowComments] = useState([])

  const { id } = useParams();  
  const [mountainID, setMountainID] = useState(id)

  //Trail Dialog Hide
  const [hideEditTrail, setHideEditTrail] = useState(false)
  //Comment Dialog Hide
  const [hideEditComment, setHideEditComment] = useState(false)

  //Comment Dialog
  const handleCommentOpen = () => { setHideEditComment(true) }
  const handleCommentClose = () => { setHideEditComment(false) }
  //Trail Dialog
  const handleTrailOpen = () => { setHideEditTrail(true) }
  const handleTrailClose = () => { setHideEditTrail(false) }

  //Dialog Style
  const paperStyle = {
    padding: '30px 20px',
    width: "75%",
    margin: '20px auto',
    paddingTop: 50

  }

  //All data fetch 
  useEffect(() => {
    fetch(`/mountains/${id}`)
      .then((resp) => resp.json())
      .then((mountain) => {
        setShowMountain(mountain)
        setShowTrails(mountain.trails)
        setShowComments(mountain.comments)
      })
  }, [id])


  // const [ratingFilter, setRatingFilter] = useState('')
  // const [commentFilter, setCommentFilter] = useState([])

  // //
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const commentRating = {
  //     rating: parseInt(ratingFilter)
  //   }
  //   fetch((`/comments/${id}`), {
  //     method: "POST", 
  //     headers:{ "Content-Type":"application/json"}, 
  //     body: JSON.stringify(commentRating)
  //   })
  //   .then((resp) => resp.json())
  //   .then((comment) => setCommentFilter(comment))
  // }

  // console.log(commentFilter)
  // const commentFiltered = commentFilter.map((filter) => {
  //  return <>
  //   <p>{filter.title}</p>
  //   <p>{filter.description}</p>
  //   </>
  // })
  const trailMap = showTrails.map((trail) => <TrailsList trail={trail} key={trail.id} />)
  const commentMap = showComments.map((comments) => <Comments key={comments.id} comments={comments} currentUser={currentUser} showComments={showComments} setShowComments={setShowComments} />)

  return (
    <>
      <Box>
        <Paper style={paperStyle}>
          <div>
            <Typography
              variant='h2'
              fontWeight={"Bold"}
              style={{ textAlign: "center" }}>
              {showMountain.name}
            </Typography>
            <img src={showMountain.image_url}></img>
            <p>Number of Trails: {showMountain.number_trails}</p>
            <p>Number of Lifts: {showMountain.number_lifts}</p>
            <p>Mountain Summit Elevation: {showMountain.elevation} ft</p>
            <Accordion className="Accordion-side" style={{ width: "100%", color: "white", backgroundColor: "#5ea4ff" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography style={{ color: "white" }}>Trail List</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#b4bcc5" }}>
                <Button variant="contained" onClick={handleTrailOpen}>Add</Button>
                <Dialog
                  open={hideEditTrail}
                  keepMounted
                  onClose={handleTrailClose}
                  maxWidth="lg">
                  <DialogTitle>Add Trail</DialogTitle>
                  <TrailCreate
                    showTrails={showTrails}
                    setShowTrails={setShowTrails}
                    handleTrailClose={handleTrailClose} 
                    mountainID={mountainID}
                    showMountain={showMountain}
                    setHideEditTrail={setHideEditTrail}/>
                </Dialog>
                <div>
                  <Typography variant='h6'>Trail Details: </Typography>
                  {trailMap}
                  <Typography style={{ color: "black", marginTop: 10 }}>Condition:</Typography>
                  <Typography>Grommed: <FontAwesomeIcon icon="fa-solid fa-snowplow" style={{ color: "black" }} /> </Typography>
                  <Typography>Ungroomed: <FontAwesomeIcon icon="fa-solid fa-snowflake" /></Typography>
                  <Typography style={{ color: "black", marginTop: 10 }}>Difficulty</Typography>
                  <Typography>Easiest: <FontAwesomeIcon icon="fa-solid fa-circle" style={{ color: "green" }} /> </Typography>
                  <Typography>More Difficult: <FontAwesomeIcon icon="fa-solid fa-square" style={{ color: "blue" }} /></Typography>
                  <Typography>Very Difficult: <FontAwesomeIcon icon="fa-solid fa-diamond" style={{ color: "black" }} /></Typography>
                  <Typography>Expert (Caution): <FontAwesomeIcon icon="fa-solid fa-diamond" style={{ color: "black" }} /><FontAwesomeIcon icon="fa-solid fa-diamond" style={{ color: "black" }} /></Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Box>
      <Box>
        <Paper style={paperStyle}>
          <div>
            <Button className='comment-button' onClick={handleCommentOpen} startIcon={<AddCircleOutlineIcon />}></Button>
            <Dialog
              open={hideEditComment}
              keepMounted
              onClose={handleCommentClose}
              maxWidth="lg">
              <DialogTitle>Create Comment</DialogTitle>
              <CreateComment
                setShowComments={setShowComments}
                showComments={showComments}
                currentUser={currentUser}
                showMountain={showMountain}
                setHideEditComment={setHideEditComment}
                handleCommentClose={handleCommentClose} />
            </Dialog>
            <Typography variant='h4'>Comments:</Typography>
            {commentMap}
          </div>




          {/* <TextField tpye="number" onChange={(e) => setRatingFilter(e.target.value)}></TextField>
          <Button type="submit" onClick={handleSubmit}>ratings</Button>
          {commentFiltered} */}
        </Paper>
      </Box>



    </>
  )
}

export default MountainCard