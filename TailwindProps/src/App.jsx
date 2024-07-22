import { useState } from 'react'
import Card from './Components/Card'

function App() {
  const users =["First User", "Second User", "Third User", "Fourth User"]
  const btnChange = {
    btn01 : "Read More",
    btn02 : "Explore Now",
    btn03 : "Go to Wikipedia",
    btn04 : "Learn More"
  }

  return (
    <div>
      <Card  userName= {users[0]}  btnText = {btnChange.btn01}/>
      <Card  userName= {users[1]}  btnText = {btnChange.btn02}/>
      <Card  userName= {users[2]}  btnText = {btnChange.btn03}/>
      <Card  userName= {users[3]}  btnText = {btnChange.btn04}/>
    </div>
  )
}

export default App
