import React from 'react'
import { Container, Logo, LogOutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  const navItem = [
    {
      name: 'Home', 
      path: '/',
      active: true 
    },
    {
      name: 'LogIn', 
      path: '/logIn',
      active: !authStatus 
    },
    {
      name: 'SignUp', 
      path: '/signUp',
      active : !authStatus
    },
    {
      name: 'All Posts', 
      path: '/all-posts',
      active : authStatus
    },
    {
      name: 'Add Post', 
      path: '/add-post',
      active : authStatus
    }
  ]

  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link to='/' >
              <Logo width='70px`' />
            </Link>
          </div>
          <ul>
            {navItem.map( (item) => (
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={()=>{navigate(item.slug)}}
                  >{item.name}</button>
                </li>
              ) : null
            ) )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
