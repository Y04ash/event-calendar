import React, { useState } from "react";
import "./sideBar.css";
import { useContext } from "react";
import { YearContext } from "../../App";
import { DateContext } from "../calendar.jsx";
import { MdEdit } from "react-icons/md";
const ViewEvent = () => {
  const { year, setYear } = useContext(YearContext);
  const {
    selectedMonth,
    setSelectedMonth,
    selectedDateObj,
    setSelectedDateObj,
  } = useContext(DateContext);
  
  const [searchTemp,setSearchTemp] = useState(year[selectedMonth].find((x) => x.key === selectedDateObj.key))
  const [temp,setTemp] = useState(searchTemp)

  // setTempObj(temp)
  console.log("tempObj", temp);
  const onSearch = (event) => {
    const value = event.target.value.toLowerCase(); // Ensure case-insensitive search
    if (value === '') {
        setTemp(searchTemp); // Reset to the full list
    } else {
        // Filter eventData for matching names
        searchTemp.eventData &&
        setTemp({
            ...searchTemp,
            eventData: searchTemp.eventData.filter((x) =>
                x.name.toLowerCase().includes(value)
            ),
        });
    }
};

  return (
    <div className="view-event-wrapper autoheight">
      <div className="search ">
            <form action="" className="search-form">
                <input type="text" placeholder = "  Seach..." className="search-input" onChange={()=>onSearch(event)}/>
            </form>
          </div>
      {temp.eventData ? (
        temp.eventData.map((x) => (
          <div className="individual-event-wrapper autoheight">
            <div className="event-title autoheight">
              <div className="event-title-left autoheight">
                <div className="event-name autoheight">{x.name}</div>
                <span className="event-time autoheight">
                  {x.startTime}-{x.endTime}
                </span>
              </div>
              <div className="edit-btn autoheight"><MdEdit /></div>
            </div>
            <div className="event-body autoheight">
              <span className={x.type === 'work' ?'event-type autoheight blue': x.type === 'personal' ? 'event-type autoheight pink' : 'event-type autoheight green'}>{x.type}</span>
              <p className="event-description autoheight">{x.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>no tasks</p>
      )}
    </div>
  );
};

export default ViewEvent;
