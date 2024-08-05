import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwrite/config"
import {logOut} from '../../Store/AuthSlice'

function LogOutBtn() {
  const dispatch = useDispatch()
  const logOutHandler = () => {
    authService.logOut( () => {
      dispatch(logOut())
    } )
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default LogOutBtn
