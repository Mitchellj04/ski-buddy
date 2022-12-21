import React, { useEffect, useState } from 'react'
import Mountain from './Mountain'

const MountainCard = () => {

    const [showMountain, setShowMountain] = useState([])
    

    // useEffect(() => {
    //     fetch(`/mountain/${id}`)
    //     .then((resp) => resp.json())
    //     .then((mountain) => setShowMountain(mountain))
    // }, [])

  return (
    <div>
        <h1>Moutain</h1>
        {/* <h1>{list.name}</h1>
        <p>Number of Trails: {list.number_trails}</p>
        <p>Number of Lists: {list.number_lifts}</p>
        <p>Mountain Summit Elevation: {list.elevation}</p> */}
        <h3>Trails:</h3>
        
    </div>
  )
}

export default MountainCard