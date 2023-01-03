import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faDiamond, faSnowplow, faSquare } from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@mui/material';


library.add(faSnowplow, faDiamond, faSquare, faCircle)

const TrailsList = ({trail}) => {


  console.log(trail)

 function groomedTrail(){
  if (trail.groomed === true){
    return <FontAwesomeIcon icon="fa-solid fa-snowplow" style={{color: "black"}}/>
    
  }
  else{
    return 
  }
 }

 function trailDifficulty(){
  if(trail.difficulty === "Expert"){
    return <><FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/><FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}} /></>
  }
  else if(trail.difficulty === "Very Difficult"){
    return <FontAwesomeIcon icon="fa-solid fa-diamond" style={{color: "black"}}/>
  }
  else if(trail.difficulty == "More Difficult"){
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
        <Grid item xs={12}>
      <Typography variant='h6' style={{textAlign: "left", color: "blue"}}>{trail.trail_name}</Typography>
        <p>difficulty: {trailDifficulty()}</p>
        {groomedTrail()}
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrailsList