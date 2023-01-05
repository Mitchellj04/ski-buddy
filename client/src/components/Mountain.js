import MountainList from "./MoutainList";
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