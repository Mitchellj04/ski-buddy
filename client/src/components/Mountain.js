import MountainList from "./MoutainList";
import { useState, useEffect } from "react";
import Trails from "./Trails";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function Mountain({mountains}){

 
    console.log(mountains)

    // const mountain = mountains.map((list) => <MountainList list={list}/>)

    const mountainList = mountains.map((list) => <MountainList list={list} />)
    // mount
    

    return (
        <>
        <Grid container
        style={{padding: 100}}>
        {mountainList}
        </Grid>
        </>
    )
}

export default Mountain;