import { useState, useEffect } from "react";
import MountainList from "./MoutainList";
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import MountainCreate from "./MountainCreate";
import {Dialog, DialogActions, DialogContent,  DialogTitle, Box, TextField} from '@mui/material';

function Mountain(){

    const [mountains, setMountains] = useState([])
    const navigate = useNavigate('')
    const [hideCreate, setHideCreate] = useState(false)
    const handleClickOpen = () => {setHideCreate(true);};
    const handleClose = () => {setHideCreate(false);};


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
        <Button style={{marginTop: 100}} onClick={handleClickOpen} variant={"contained"}>Create</Button>
        <Dialog
            open={hideCreate}
            keepMounted
            onClose={handleClose}>
            <DialogTitle>Create New mountainName</DialogTitle>
            <DialogContent>
                <MountainCreate setMountains={setMountains} setHideCreate={setHideCreate}/>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        <Grid container
        style={{padding: 100}}>
        {mountainList}
        </Grid>
        </>
    )
}

export default Mountain;