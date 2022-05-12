import './Announcement.css';
import React, { useState, useEffect }  from 'react';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import List from './List';
import withListLoading from './withListLoading';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';



const Announcement = () => {
  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://class-schedule-app00.herokuapp.com/getannouncements/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((announcements) => {
        setAppState({ loading: false, announcements: announcements });
      });
  }, [setAppState]);
    return (
<Container fluid>


<Row>   
<Col className="announcement"  sm={2} style={{background: "#18183D",height: "760px", color:"white", overflow: 'hidden',position:"fixed", marginTop: "5.0rem"}}>
{auth.isAuthenticated ?<>
            <li style={{listStyleType: "none"}} className='nav-item'> <hr />
              <Link to='/announcements' className='nav-links' onClick={closeMobileMenu}>
                Notifications
              </Link>
            </li>
            <li style={{listStyleType: "none"}} className='nav-item'>  <hr />
              <Link to='/sesion' className='nav-links' onClick={closeMobileMenu}>
                Sessions
              </Link>
            </li>
          

            <li style={{listStyleType: "none"}} className='nav-item'> <hr />
              <Link
                to='/schedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li> <hr />
           </>: <>

           </>}

</Col>
<Col sm={10}><h2>| Announcements</h2>
<div className='repo-container' style={{marginLeft: "20%", marginTop: "5%"}}>
      <ListLoading isLoading={appState.loading} announcements={appState.announcements} />
    </div> 
    <footer>
      <div className='footer'  style={{marginLeft: "21%", marginTop: "5%"}}>
        Built with {' '}
        <span role='img' aria-label='love'>
          💚
        </span>{' '}
         by Group 10
      </div>
    </footer>
 
  

  
</Col>
  
</Row>
</Container>



    );
};

export default Announcement;