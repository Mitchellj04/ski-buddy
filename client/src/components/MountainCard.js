import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import Mountain from './Mountain'
import TrailsList from './TrailsList';
import {useParams} from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Accordion, AccordionActions, AccordionSummary, Typography, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MountainCard = ({mountains}) => {

    const [showMountain, setShowMountain] = useState('')
    const [showTrails, setShowTrails] = useState([])
    const {id} = useParams();

    console.log(id)

    useEffect(() => {
        fetch(`/mountains/${id}`)
        .then((resp) => resp.json())
        .then((mountain) => {setShowMountain(mountain)
        setShowTrails(mountain.trails)})
    }, [id])

    console.log(showMountain)
    console.log(showMountain.trails)
    console.log(showTrails)

    const trailMap = showTrails.map((trail) => <TrailsList trail={trail}/>)

  return (
    <div>
        <h1>Moutain</h1>
        <h1>{showMountain.name}</h1>
        <img src={showMountain.image_url}></img>
        <p>Number of Trails: {showMountain.number_trails}</p> 
        <p>Number of Lists: {showMountain.number_lifts}</p>
        <p>Mountain Summit Elevation: {showMountain.elevation} ft</p>
        <Accordion className="Accordion-side" style={{width: "100%", color: "#1976D2"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Trail List</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                       {trailMap}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
  
        
    </div>
  )
}

export default MountainCard