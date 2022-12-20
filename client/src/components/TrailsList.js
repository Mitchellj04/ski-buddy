import React, { useEffect } from 'react'

const TrailsList = ({trail}) => {

    useEffect(() => {
        fetch('/mountain/:id')
        .then((resp) => resp.json())
        .then((trails) => console.log(trails))
    })

    console.log(trail)
  return (
    <div>
        <p>{trail.trail_name}</p>
        <p>{trail.difficulty}</p>
        <p>{trail.groomed}</p>
    </div>
  )
}

export default TrailsList