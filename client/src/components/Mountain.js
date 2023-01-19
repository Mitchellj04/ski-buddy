import { useState, useEffect } from "react";
import MountainList from "./MoutainList";
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function Mountain(){

    const [mountains, setMountains] = useState([])
    const navigate = useNavigate('')


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