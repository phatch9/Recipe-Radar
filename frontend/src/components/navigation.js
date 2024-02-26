import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './SignInButton'; //needs to add a signinbutton.js
import '../components/navigation.css';
function NavBar(){
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Recipe Radar
            <i class="fas fa-landmark"></i>          
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='' //direct links to different folders
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Calendar
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to=''
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to=''
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Post
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to=''
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to=''
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>   
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}
export default NavBar;