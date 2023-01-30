import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, text } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faDiamond, faSnowplow, faSquare, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { Button, Typography } from '@mui/material';


library.add(faSnowplow, faDiamond, faSquare, faCircle, faSnowflake)

const TrailsList = ({trail}) => {

  const trailStyle = {
    margin: '5px auto',
    borderColor: text.primary,
    border: 1,
  }

  // console.log(trail)

 function groomedTrail(){
  if (trail.groomed === true){
    return <FontAwesomeIcon icon="fa-solid fa-snowplow" style={{color: "black"}}/>
  }
  else{
    return <FontAwesomeIcon icon="fa-solid fa-snowflake" />
  }
 }

 function trailDifficulty(){
  if(trail.difficulty === "Expert"){
    return <><FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/><FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}} /></>
  }
  else if(trail.difficulty === "Very Difficult"){
    return <FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/>
  }
  else if(trail.difficulty === "More Difficult"){
   return <FontAwesomeIcon icon="fa-solid fa-square" style={{color: "blue"}}/>
 }
 else{
  return <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "green"}} />
 }
} 
  return (
    <Box>
      <Grid container        
                direction="row"
                alignItems="stretch" >
        <Grid item xs={3} style={trailStyle}>
      <Typography style={{textAlign: "left", color: "blue"}}>{trail.trail_name}</Typography>
        </Grid>
      <Grid item xs={3} style={trailStyle}>
        <p>difficulty: {trailDifficulty()}</p>
        </Grid>
        <Grid item xs={3} style={trailStyle}>
        {groomedTrail()}
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrailsList