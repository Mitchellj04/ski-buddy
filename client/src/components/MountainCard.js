import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import TrailsList from './TrailsList';
import { useParams} from 'react-router-dom';
import { Dialog, DialogTitle, Accordion, AccordionSummary, Typography, AccordionDetails, Box, Paper, Button} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comments from './Comments';
import CreateComment from './CreateComment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, text } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faDiamond, faSnowplow, faSquare, faSnowflake } from '@fortawesome/free-solid-svg-icons'


library.add(faSnowplow, faDiamond, faSquare, faCircle, faSnowflake)


const MountainCard = ({currentUser}) => {

    const [showMountain, setShowMountain] = useState('')
    const [showTrails, setShowTrails] = useState([])
    const [showComments, setShowComments] = useState([])
    const {id} = useParams();
    const [hideEditTrail, setHideEditTrail] = useState(false)  


    const handleTaskOpen = () => {setHideEditTrail(true)}
    const handleTaskClose = () => {setHideEditTrail(false)}

    const paperStyle ={
      padding: '30px 20px',
      width: "75%", 
      margin: '20px auto',
      paddingTop: 50

    }

    useEffect(() => {
        fetch(`/mountains/${id}`)
        .then((resp) => resp.json())
        .then((mountain) => {setShowMountain(mountain)
        setShowTrails(mountain.trails)
        setShowComments(mountain.comments)})
    }, [id])



    const trailMap = showTrails.map((trail) => <TrailsList trail={trail} key={trail.id}/>)
    const commentMap = showComments.map((comments) => <Comments key={comments.id} comments={comments} currentUser={currentUser} showComments={showComments} setShowComments={setShowComments}/>)

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
                  <Typography style={{color: "black", marginTop: 10}}>Condition:</Typography>
                  <Typography>Grommed: <FontAwesomeIcon icon="fa-solid fa-snowplow" style={{color: "black"}}/> </Typography>
                  <Typography>Ungroomed: <FontAwesomeIcon icon="fa-solid fa-snowflake" /></Typography>
                  <Typography style={{color: "black", marginTop: 10}}>Difficulty</Typography>
                  <Typography>Easiest: <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "green"}} /> </Typography>
                  <Typography>More Difficult: <FontAwesomeIcon icon="fa-solid fa-square" style={{color: "blue"}}/></Typography>
                  <Typography>Very Difficult: <FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/></Typography>
                  <Typography>Expert (Caution): <FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/><FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/></Typography>
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
              <CreateComment 
                setShowComments={setShowComments} 
                showComments={showComments} 
                currentUser={currentUser} 
                showMountain={showMountain} 
                setHideEditTrail={setHideEditTrail} 
                handleTaskClose={handleTaskClose}/>
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