import { useState, useEffect } from "react";
import MountainList from "./MoutainList";
import Grid from '@mui/material/Unstable_Grid2';

function Mountain(){

    const [mountains, setMountains] = useState([])

    useEffect(() => {
        fetch('/mountains')
        .then((resp) => resp.json())
        .then((list) => {setMountains(list)});
      }, [])
    

 
    console.log(mountains)

    // const mountain = mountains.map((list) => <MountainList list={list}/>)

    const mountainList = mountains.map((list) => <MountainList key={list.id} list={list} />)
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