import React from 'react'
import './topCalendar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from 'react';
import {DateContext} from '../calendar.jsx'
import DropDown from './DropDown.jsx'
import SideBar from '../sideBar/SideBar.jsx';
const TopCalendar = () => {
    const { selectedMonth ,setSelectedMonth,selectedDate,setSelectedDate,currInd} = useContext(DateContext);
    const currentFullDate = new Date();
  const month = currentFullDate.getMonth(); // getMonth() is zero-indexed (0 = January, 11 = December)
  const date = currentFullDate.getDate();
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className='top-calendar '>
        <div className="current-year-wrapper ">
            <h1 className='current-year text-3xl flexCenter font-bold'>2025</h1>
        </div>
            <DropDown/>
        <div className="current-date-wrapper flexCenter">
            <h1 className="current-date font-semi-bold">{date} {months[month]} 2025</h1>
        </div>
        <div className="add-event-wrapper">
        <div className="hamburger-wrapper">

            <SideBar/>
        </div>
        </div>
        <div
          className='days' >
         
          {daysOfWeek.map((x)=><p>{x}</p> )}
            
        </div>
    </div>
  )
}
 
export default TopCalendar