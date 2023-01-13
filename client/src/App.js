import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Mountain from "./components/Mountain";
import MountainCard from "./components/MountainCard";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  

  useEffect(() => {
    fetch("http://localhost:4000/me")
    .then((resp) => {
      if(resp.ok){
        resp.json().then((user) => setCurrentUser(user))
      }
      else{
        resp.json()
        .then((error) => console.log(error))
      }
    })
  }, [])

 


  console.log(currentUser)

  if (!currentUser) return <Login setCurrentUser={setCurrentUser} />;

  return (
    <>
    <Router>
    <Header setCurrentUser={setCurrentUser}></Header>
    <div>
    <Routes>
      <Route exact path="/" element={<Mountain/>}/>
      {/* <Route exact path="/alltrails" element={<TrailsList/>}/> */}
      <Route path="/mountains/:id" element={<MountainCard currentUser={currentUser}/>}/>
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  )
}



export default App;
