import React, { useState, useContext, useEffect } from "react";
import "./bottomCalendar.css";
import { YearContext } from "../../App";
import { DateContext } from "../calendar.jsx";

const BottomCalendar = () => {
  const {year,setYear} = useContext(YearContext);
  const { selectedMonth,clickedDate, setClickedDate,selectedDateObj,setSelectedDateObj} = useContext(DateContext);

  const currentFullDate = new Date();
  const month = currentFullDate.getMonth(); // getMonth() is zero-indexed (0 = January, 11 = December)
  const date = currentFullDate.getDate();
  const currentDateIndex = `empty-${month}-${date}`;
  

 // Tracks the clicked date
  const [grid, setGrid] = useState([]);
  const handleDateClick = (dateKey) => {
    setClickedDate(dateKey); // Update the clicked date
    console.log("dateKey",dateKey)
    const currMonth  = year[selectedMonth]
    const temp = currMonth.find((x)=>x.key === dateKey)
    console.log("temp",temp)
    setSelectedDateObj(temp)
  };
  // useEffect(()=>{
  //   setIsGreaterThanCurrDate(currentDateIndex >= selectedDateObj.key)
  // },[selectedDateObj])
  useEffect(() => {
    if (!year || !year[selectedMonth]) return;
    
    console.log("clicked key",clickedDate)
    const monthData = year[selectedMonth]; // Get the data for the selected month
    let newGrid = [];
    let dayIndex = 0; // Tracks the day of the week

    for (let i = 0; i < monthData.length; i++) {
      // Fill empty cells until the first day of the current month
      while (dayIndex !== monthData[i].indexOfDay) {
        newGrid.push(
          <div
            className="cell empty-cell weekdays"
            key={`empty-${selectedMonth}-${i}-${dayIndex}`}
          ></div>
        );
        dayIndex = (dayIndex + 1) % 7;
      }

      // Add the actual date cell
      const isWeekend = dayIndex === 0 || dayIndex === 6;
      const isCurrentDay = monthData[i].key === currentDateIndex;
  
      const isClickedDay = (monthData[i].key === clickedDate);
      // console.log("current index",currentDateIndex)
      newGrid.push(
        <div
          className={`cell date-cell ${
            isWeekend ? "weekends" : "weekdays"
          } ${isClickedDay ? "clicked-day" : ""}`}
          key={`empty-${selectedMonth}-${monthData[i].date}`}
          onClick={() => handleDateClick(monthData[i].key)}
        >
          <p className={isCurrentDay ? "current-day" : "normal-day"}>
            {monthData[i].date}
          </p>
          {
            monthData[i].eventData && monthData[i].eventData.length !=0 && <span className="red-dot">&nbsp;</span>
          }
        </div>
      );
      dayIndex = (dayIndex + 1) % 7;
    }

    setGrid(newGrid);
  }, [selectedMonth, year, clickedDate]);

  return <div className="bottom-calendar">{grid}

   </div>;
};

export default BottomCalendar;
