import React from 'react'

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("userData"));

  if (!localStorage.getItem("userData")) {
    alert("Please login first");
    window.location.href = "login";
  }
  return (
    <>
    <div>Dashboard</div>
    <h1>Welcome {user.email}</h1>
    </>
  )
}

export default Dashboard