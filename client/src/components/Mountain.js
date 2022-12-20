import MountainList from "./MoutainList";
import { useState, useEffect } from "react";
import Trails from "./Trails";

function Mountain(){

    const [mountains, setMountains] = useState([])

    useEffect(() => {
      fetch('/mountains')
      .then((resp) => resp.json())
      .then((list) => {setMountains(list)});
    }, [])
    console.log(mountains)

    // const mountain = mountains.map((list) => <MountainList list={list}/>)

    const mountainList = mountains.map((list) => <MountainList list={list} />)
    // mount

    return (
        <>
        {mountainList}
        </>
    )
}

export default Mountain;