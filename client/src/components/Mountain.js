import { useState, useEffect } from "react";
import MountainList from "./MoutainList";
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";
import MountainCreate from "./MountainCreate";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function Mountain() {


    const [mountains, setMountains] = useState([])

    const [hideCreate, setHideCreate] = useState(false)

    const handleClickOpen = () => { setHideCreate(true); };
    const handleClose = () => { setHideCreate(false); };


    //Fetch Mountain Data
    useEffect(() => {
        fetch('/mountains')
            .then((resp) => resp.json())
            .then((list) => { setMountains(list) });
    }, [])


    const mountainList = mountains.map((list) => <MountainList key={list.id} list={list} />)



    return (
        <>
            <img className='headerImage' src='/Images/skiBuddyHeader.jpeg' style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
            <Button style={{ marginTop: 100 }} onClick={handleClickOpen} variant={"contained"}>Create</Button>
            <Dialog
                open={hideCreate}
                keepMounted
                onClose={handleClose}>
                <DialogTitle>Create New mountainName</DialogTitle>
                <DialogContent>
                    <MountainCreate setMountains={setMountains} setHideCreate={setHideCreate} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Grid container
                style={{ padding: 100 }}>
                {mountainList}
            </Grid>
        </>
    )
}

export default Mountain;