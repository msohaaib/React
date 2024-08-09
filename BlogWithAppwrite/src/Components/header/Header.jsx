import React from 'react';
import { Container, Logo, LogOutbtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  const navItem = [
    {
      name: 'Home', 
      path: '/',
      active: true 
    },
    {
      name: 'LogIn', 
      path: '/Login',
      active: !authStatus 
    },
    {
      name: 'SignUp', 
      path: '/SignUp',
      active : !authStatus
    },
    {
      name: 'All Posts', 
      path: '/AllPosts',
      active : authStatus
    },
    {
      name: 'Add Post', 
      path: '/AddPost',
      active : authStatus
    }
  ];
  

  return (
    <header>
      <Container>
        <nav className='flex justify-between pt-8'>
          <div>
            <Link to='/' >
              <Logo width='70px' /> {/* Fixed the extra backtick here */}
            </Link>
          </div>
          <ul className='flex flex-wrap gap-8 '>
            {navItem.map((item) => (
              item.active ? (
                <li key={item.name} className='hover:bg-white rounded-full py-2 px-4 transition-all'>
                  <button
                    onClick={() => { navigate(item.path) }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogOutbtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
