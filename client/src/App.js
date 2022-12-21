import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Mountain from "./components/Mountain";
import MountainCard from "./components/MountainCard";
import MountainList from "./components/MoutainList";
import SignUp from "./components/SignUp";
import TrailsList from "./components/TrailsList";
import Profile from "./components/Profile";

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

  if (!currentUser) return <Login setCurrentUser={setCurrentUser} />;

  return (
    <>
    <Router>
    <Header setCurrentUser={setCurrentUser}></Header>
    <div>
    <Routes>
      <Route exact path="/" element={<Mountain/>}/>
      <Route exact path="/alltrails" element={<TrailsList/>}/>
      <Route path="/mountain/:id" element={<MountainCard/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
      <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser}/>}/>
      <Route path="/profile" element={<Profile currentUser={currentUser}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  )
}



export default App;
