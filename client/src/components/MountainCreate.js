import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const MountainCreate = ({setMountains, setHideCreate}) => {

    const [mountainName, setName] = useState('')
    const [mountainTrails, setTrails] = useState('')
    const [mountainLifts, setLifts] = useState('')
    const [mountainElevation, setElevation] = useState('')
    const [mountainImage, setImage] = useState('')
    const [errors, setErrors] = useState([])

    const fieldStyle = {
        margin: '5px auto'
      }

    const submitMountain = (e) => {
        e.preventDefault()
       const mountain = {
            name: mountainName,
            number_trails: mountainTrails,
            number_lifts: mountainLifts,
            elevation: mountainElevation,
            image_url: mountainImage

        }
        fetch(('/mountains'), {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mountain)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then((mountain) => {setMountains((prevState) => [...prevState, mountain])
                console.log(resp)});
            }
            else {
                resp.json().then((err) => {
               console.log(err) 
                })
            }
        })
        setHideCreate(true)
    }
 
  return (
    <div>
        <form onSubmit={submitMountain}>
            <TextField 
                value={mountainName}
                style={fieldStyle}
                fullWidth
                label="Mountain Name"
                name={"name"}
                onChange={(e) => setName(e.target.value)}/>
            <TextField 
                value={mountainTrails}
                style={fieldStyle}
                fullWidth
                type={"number"}
                label="Number of Trails"
                name={"trails"}
                onChange={(e) => setTrails(e.target.value)}/>
            <TextField 
                value={mountainLifts}
                style={fieldStyle}
                fullWidth
                type={"number"}
                label="Number of Lifts"
                name={"lifts"}
                onChange={(e) => setLifts(e.target.value)}/>
            <TextField 
                value={mountainElevation}
                style={fieldStyle}
                fullWidth
                type={"number"}
                label="Elevation"
                name={"elevation"}
                onChange={(e) => setElevation(e.target.value)}/>
            <TextField 
                value={mountainImage}
                style={fieldStyle}
                fullWidth
                label="Image"
                name={"image_url"}
                onChange={(e) => setImage(e.target.value)}/>
            <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default MountainCreate