import { useState } from "react";
import TrailsList from "./TrailsList";

function MountainList({list}){

    const [trails, setTrails] = useState(list.trails)

    console.log(trails)

    const trailMap = trails.map((trail) => <TrailsList trail={trail}/>)

    return (
        <>
        <h1>{list.name}</h1>
        <p>Number of Trails: {list.number_trails}</p>
        <p>Number of Lists: {list.number_lifts}</p>
        <p>Mountain Summit Elevation: {list.elevation}</p>
        <p>Trails</p>
        </>
    )
}

export default MountainList;