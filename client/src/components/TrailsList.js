import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const TrailsList = ({trail}) => {


   
  return (
    <Box>
      <Grid container        
                direction="row"
                justify="center"
                alignItems="stretch" >
        <Grid item xs={9}>
      <p>Trail Details: </p><p>{trail.trail_name}</p>
        <p>difficulty: {trail.difficulty}</p>
        <p>Groomed: {trail.groomed}</p>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrailsList