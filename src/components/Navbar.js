import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from "../actions/auth"
import './Navbar.css';

function Navbar() {
  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);

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

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar' style={{ position: "fixed", width: "100%" }}>
        <div className='navbar-container'>
        <i class="fa fa-home text-white"></i> &nbsp;
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          
            Class Shedule
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {auth.isAuthenticated ?<>
            <li className='nav-item'>
              <Link to='/announcements' className='nav-links' onClick={closeMobileMenu}>
                Notifications
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/session' className='nav-links' onClick={closeMobileMenu}>
                Sessions
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
           </>: <>
           <li className='nav-item' style={{position: "absolute", top:"0", marginLeft: "70%"}}>
              <Link
                to='/login'
                className='nav-links btn-login'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li className='btn-signup'>
              <Link
                to='/signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
           </>}
          </ul>
          { auth.isAuthenticated ? <>
            {/* <Link to='/'>
            <Button onClick={()=>dispatch(logout())} className='signup' buttonStyle='btn--outline'>Logout</Button>
            </Link> */}
             <Link to="/">
            <button onClick={()=>dispatch(logout())} type="button" className="logout" buttonStyle='btn--outline'>
            Logout
            </button>
          </Link>
          </> :  <>
            {/* {button && <Button className='signup-button' buttonStyle='btn--outline'>Add Student</Button>} */}
          </>}
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
