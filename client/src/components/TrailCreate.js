import React, {  useState } from 'react'
import { DialogActions, DialogContent, Box, Button, TextField} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const TrailCreate = ({showTrails, setShowTrails, handleTrailClose, showMountain, setHideTrailEdit}) => {

    const [trailName, setTrailName] = useState("")
    const [trailDifficulty, setTrailDifficulty] = useState('')
    const [groomedTrail, setGroomedTrail] = useState(true)
    const [value, setValue] = useState("Easy")

    const fieldStyle = {
        margin: '5px auto'
      }

    const buttonStyle = {
        width: 10,
        margin: '5px auto'
    }


      const handleGroomed = (e) => {setGroomedTrail(e.target.value)}
      const handleDifficulty = (e) => {setValue(e.target.value)}

      const trailSubmit = (e) => {
        e.preventDefault()
        const trails = {
            trail_name: trailName,
            difficulty: value,
            groomed: groomedTrail,
            mountain_id: showMountain.id
        }
        fetch('/trails', {
            method: "POST", 
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(trails)
        })
        .then((resp) => resp.json())
        .then((trail) => setShowTrails((prevState) => [...prevState, trail]))
        setHideTrailEdit(false)
      }

  return (
    <Box>
    <DialogContent>
        <TextField
            fullWidth
            label="Trail Name"
            name="trail_name"
            value={trailName}
            style={fieldStyle}
            onChange={(e) => setTrailName(e.target.value)}/>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Groomed</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Beginner"
                name="radio-buttons-group"
                style={fieldStyle}
                style={{ display: 'initial' }}
                onChange={handleGroomed}>
                <FormControlLabel value={true} control={<Radio />} label="Groomed" />
                <FormControlLabel value={false} control={<Radio />} label="Not Groomed" />
            </RadioGroup>
        </FormControl> 
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Experience Level</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Beginner"
                name="radio-buttons-group"
                style={fieldStyle}
                style={{ display: 'initial' }}
                onChange={handleDifficulty}>
                <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
                <FormControlLabel value="More Difficult" control={<Radio />} label="More Difficult" />
                <FormControlLabel value="Very Difficult" control={<Radio />} label="Very Difficult" />
                <FormControlLabel value="Expert" control={<Radio />} label="Expert" />
            </RadioGroup>
        </FormControl> 
    </DialogContent>
    <Button color='primary' variant='contained' style={buttonStyle} onClick={trailSubmit}>Submit</Button>
    <DialogActions>
        <Button onClick={handleTrailClose}>Close</Button>
    </DialogActions>
</Box>
  )
}

export default TrailCreate