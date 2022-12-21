import React from 'react'

const Profile = ({currentUser}) => {
   
    console.log(currentUser)
  return (
    <div>
        <p>{currentUser.username}</p>
        <p>{currentUser.name}</p>   
        <p>{currentUser.age}</p>
        <p>{currentUser.experience_level}</p>
        <p>{currentUser.bio}</p>
    </div>
  )
}

export default Profile