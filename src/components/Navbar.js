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
        <div className='navbar-container' style={{marginLeft: "3%"}}>
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
            {/* <Link to='/announcements' className='nav-links' onClick={closeMobileMenu}>
                Add Student
              </Link> */}

              {auth.isStudent ? null : <>
                <Link to='/announcements' className='nav-links' onClick={closeMobileMenu}>
                Add Student
              </Link>
      </>}

            </li>
            <li className='nav-item'>
              <Link to='/sesion' className='nav-links' onClick={closeMobileMenu}>
                Sessions
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/schedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>
           </>: <>
           <li className='nav-item' style={{position: "absolute", top:"0", marginLeft: "68%"}}>
              <Link
                to='/login'
                className='nav-links btn-login'
                onClick={closeMobileMenu}
              >
                Login
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
