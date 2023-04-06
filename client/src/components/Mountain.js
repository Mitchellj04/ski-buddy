import { useState, useEffect } from "react";
import MountainList from "./MoutainList";
import Grid from '@mui/material/Unstable_Grid2';
import { AppBar, Button, Fab, Menu, MenuItem } from "@mui/material";
import MountainCreate from "./MountainCreate";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import skiBackground from '../Images/skiBuddyHeader.jpeg'
import AddIcon from '@mui/icons-material/Add';

function Mountain() {


    const [mountains, setMountains] = useState([])

    const [hideCreate, setHideCreate] = useState(false)

    const handleClickOpen = () => { setHideCreate(true); };
    const handleClose = () => { setHideCreate(false); };
    const handleClick = (event) => {setAnchorEl(event.currentTarget)}
    const handleClickClose = () => {setAnchorEl(null)}

    //Fetch Mountain Data
    useEffect(() => {
        fetch('/mountains')
            .then((resp) => resp.json())
            .then((list) => { setMountains(list) });
    }, [])


    const mountainList = mountains.map((list) => <MountainList key={list.id} list={list} />)



    return (
        <>
            <img className='headerImage' src={skiBackground} style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
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
            <AppBar 
              position="fixed" 
              elevation={0} 
              color="primary" 
              style={{top: "auto", bottom: 0, alignItems: "center", background: "transparent"}}>
                <Fab 
                  id="plus-button"
                  onClick={handleClick} 
                  style={{background: "#1976D2", color: "white"}} 
                  aria-controls={open ? 'create-menu' : undefined}
                  aria-haspopup={"true"}
                  aria-expanded={open ? true : undefined}>
                  <AddIcon/>
                </Fab>
                <Menu
                    id="create-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClickClose}
                    MenuListProps={{
                      'aria-labelledby': 'plus-button',
                    }}>
                  <MenuItem onClick={menuProject}>Create Project</MenuItem>
                  <MenuItem onClick={menuTask}>Create Task</MenuItem>
                </Menu>
            </AppBar>
        </>
    )
}

export default Mountain;