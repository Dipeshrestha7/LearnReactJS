import React from 'react'
import { useContext } from 'react'
import { profileContext } from '../context/ProfileContext'

function Profile() {
    const {profile, loading, error} = useContext(profileContext);

    if(loading) return <h2>Loading...</h2>;
    if(error) return <h2>{error}</h2>;
  return (
    <>
    <div>
        <h2>{profile.first_name} {profile.last_name}</h2>
        <p>Email: {profile.email}</p>
        <img src={profile.avatar} alt="User Avatar" />
    </div>
    </>
  )
}

export default Profile