import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/msohaaib")
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-xl p-4 flex flex-row-reverse justify-center'>
      <div className='flex flex-col gap-4 ml-4 mt-3 text-left'>
        <p>Name : {data.name}</p>
        <p>UserName : {data.login}</p>
        <p>Github Repositories : {data.public_repos}</p> 
        <p>Location : {data.location}</p> 
        <p>Github link : <a target='_blank' href="https://github.com/msohaaib">{data.html_url}</a></p> 
      </div>
      <img className='w-auto h-60' src={data.avatar_url} alt="profile" />
    </div>
  )
}

export default Github
export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/msohaaib")
    return response.json()
}
