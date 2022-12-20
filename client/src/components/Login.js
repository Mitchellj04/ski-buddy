import React, { useState } from 'react'

const Login = ({setCurrentUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')


   function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username, 
            password
        }
        fetch('/login',{
            method: "POST", 
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(setCurrentUser)
            }
        })
   }

   console.log(username)
   console.log(password)

  return (
    <>
    <form onClick={handleSubmit}>
        <li>Username:<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input></li>
        <li>Password:<input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input></li>
        <button type='submit' value={"login"} onClick={() => setLogin(true)}>Login</button>
    </form>    
    </>
  )
}

export default Login