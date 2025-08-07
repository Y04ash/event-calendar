import React, { useState } from 'react'
// import year from '../data.js';
import TopCalendar from './topCalendar/TopCalendar.jsx';
import BottomCalendar from './bottomCalendar/BottomCalendar.jsx'
import '../App.css'
import '../css/calendar.css'
import SideBar from './sideBar/SideBar.jsx'
import { useContext,createContext } from 'react';
import { YearContext } from '../App';
export const DateContext = createContext();
const Calendar = () => {
  const currentFullDate = new Date();
  const date = currentFullDate.getDate();  
  const month = parseInt(currentFullDate.getMonth() );  // getMonth() is zero-indexed (0 = January, 11 = December)
  const {year,setYear} = useContext(YearContext);
  const [selectedMonth,setSelectedMonth] = useState(month)
  const currentDateIndex = `empty-${month}-${date}`;
  const currMonth = year[selectedMonth]
  const currDateObj = currMonth.find((x)=> x.key === currentDateIndex)
  const [isGreaterThanCurrDate,setIsGreaterThanCurrDate] = useState()

  const [selectedDateObj,setSelectedDateObj] = useState(currDateObj)
  const [currInd,setCurrInd] = useState(true)

  const [clickedDate, setClickedDate] = useState(null); 
  return (
    <div className='calendar'>
      <DateContext.Provider value ={{selectedMonth,setSelectedMonth,clickedDate, setClickedDate,selectedDateObj,setSelectedDateObj,currInd,setCurrInd,isGreaterThanCurrDate,setIsGreaterThanCurrDate}}>
        <TopCalendar />
        <BottomCalendar />
        
      </DateContext.Provider>
    </div>
  )
}

export default Calendar