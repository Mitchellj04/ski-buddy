import '../App.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function MountainList({list}){

    const navigate = useNavigate('')

    console.log(list)
    // console.log(trails)
    // const {id} = useParams()
    // const [trails, setTrails] = useState(list.trails)
    // const trailMap = trails.map((trail) => <TrailsList trail={trail}/>)

    //Navigate to Mountain
    const handleMountain = () => {
        navigate(`/mountains/${list.id}`)
    
    }

    //Styling
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        alignItems: 'center',
        color: theme.palette.text.secondary,
        width: 600,
        marginRight: 100
      }));   

    return (
        <>
        <Box>
        
        <Grid container        
                direction="row"
                justify="center"

                style={{margin: 10, boxShadow:" 3px 3px 3px 3px #7F7F80"}}
                >
        <Grid item xs={9}>
                <Item>
                <Typography variant="h2" color="gray" fontWeight={"Bold"}>{list.name}</Typography>
                <div className="image-div">
                <img src={list.image_url} className={"mountain-image"}></img>
                </div>
                <Typography variant="h6" color="primary" fontWeight={"Bold"}>Number of Trails:<Typography variant="body1" color="black" className="body1">{list.number_trails}</Typography> </Typography>
                <Typography variant="h6" color="primary" fontWeight={"Bold"}>Number of Lifts:<Typography variant="body1" color="black">{list.number_lifts}</Typography></Typography>
                <Typography variant="h6" color="primary" fontWeight={"Bold"}>Mountain Summit Elevation: <Typography variant="body1" color="black">{list.elevation} ft</Typography></Typography>
                <Button onClick={handleMountain}>Trails >>></Button>
                </Item>
            </Grid>
        </Grid>
        </Box>
        </> 
    )
}

export default MountainList;