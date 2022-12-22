import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";

const SignUp = ({setCurrentUser}) => {
    const [username, setUsername] = useState('')
    // const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [bio, setBio] = useState('')
    const [experience_level, SetExperience]= useState('')
    const [login, setLogin] = useState('')


   function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username, 
            password, 
            name,
            age,
            experience_level
        }
        fetch('/users',{
            method: "POST", 
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then((user) => setCurrentUser(user));
            }
            else {
                resp.json().then((err) => console.log(err))
            }
        })
        // navigate("/")
   }

   const handleNavigate = () => {
    // navigate("/")
   }
   const handleLogin = () =>{
    // navigate("/login")
   }


  return (
    <>
    <form onClick={handleSubmit}>
        <li>Username:<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input></li>
        <li>Name:<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input></li>
        <li>Age:<input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}></input></li>
        Experience:<select type="select" id="experience" value={experience_level} onChange={(e) => SetExperience(e.target.value)}>
            <option value={""}></option>
           <option value={"Beginner"}>Beginner</option>
            <option value={"Advanced"}>Advanced</option>
            <option value={"Expert"}>Expert</option>
        </select>
        <li>Password:<input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input></li>
        <button type='submit' value={"Sign Up"}>Sign Up</button>
    </form>    
    </>
  )
}

export default SignUp