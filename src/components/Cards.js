import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {useSelector, useDispatch} from 'react-redux';


function Cards() {

  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);

  return (
    <div className='cards'>
      <h1 className='activity'>All Activities</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
   
          <ul className='cards__items'>
            <CardItem
              src='./images/student1.jpg'
              text='Join the family'
              label='Students Dashboard'
              path='/login'
            />
            <CardItem
              src='./images/student2.jpg'
              text='Register students, make announcements and more'
              label='Sessions'
              
              path='/login'
            />
            <CardItem
              src='./images/school1.jpg'
              text='See notifications here'
              label='Announcements'
              path='/login'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
