import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Mountain from "./components/Mountain";
import MountainCard from "./components/MountainCard";
import MountainList from "./components/MoutainList";
import SingUp from "./components/SingUp";
import TrailsList from "./components/TrailsList";

function App() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    fetch("http://localhost:4000/me")
    .then(resp => {
      if(resp.ok){
        resp.json().then((user) => setCurrentUser(user))
      }
    })
  }, [ ])

  console.log(currentUser)

  if (!currentUser) return <Login onLogin={setUser} />;

  return (
    <>
    <Router>
    <Header></Header>
    <Routes>
      <Route exact path="/" element={<Mountain/>}/>
      <Route exact path="/alltrails" element={<TrailsList/>}/>
      <Route path="/mountain/:id" element={<MountainCard/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SingUp setCurrentUser={setCurrentUser}/>}/>
    </Routes>
    </Router>
    </>
  )
}



export default App;
