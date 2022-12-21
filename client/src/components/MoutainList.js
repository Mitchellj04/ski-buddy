import { useState } from "react";
import TrailsList from "./TrailsList";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function MountainList({list}){

    const [trails, setTrails] = useState(list.trails)

    console.log(trails)

    const trailMap = trails.map((trail) => <TrailsList trail={trail}/>)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));   

    return (
        <>
        <Box>
        <Grid container        
                direction="row"
                justify="center"
                alignItems="stretch" 
                //style={{margin: 10, boxShadow:" 5px 5px 5px 5px pink"}}
                >
        <Grid item xs={9}>
                <Item>
                <h1>{list.name}</h1>
                <img src={list.image_url} className={"mountain-image"}></img>
                <p>Number of Trails: {list.number_trails}</p>
                <p>Number of Lists: {list.number_lifts}</p>
                <p>Mountain Summit Elevation: {list.elevation}</p>
                <p>Trails</p>
                </Item>
            </Grid>
        </Grid>
        </Box>
        </> 
    )
}

export default MountainList;