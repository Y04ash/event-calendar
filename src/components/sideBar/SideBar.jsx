import { useState ,useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosAddCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { YearContext } from "../../App";
import {DateContext} from '../calendar.jsx'
import './sideBar.css'
import AddEvent from './AddEvent.jsx';
import ViewEvent from './ViewEvent.jsx';
function OffCanvasExample({ name, ...props }) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const {year,setYear} = useContext(YearContext);
    const { selectedMonth ,setSelectedMonth,clickedDate, setClickedDate,selectedDateObj,setSelectedDateObj,isGreaterThanCurrDate,setIsGreaterThanCurrDate} = useContext(DateContext);
  const [show, setShow] = useState(false);
  const [isAddEvent,setIsAddEvent] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    console.log("selectedObj sidebar",selectedDateObj)
},[selectedDateObj])
    const handleAddEventClick = () => setIsAddEvent(true)
    const handleViewEventClick = () => setIsAddEvent(false)
    
  return (
    <>
        <GiHamburgerMenu  className='hamburger' onClick={handleShow}/>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
            {
                (selectedDateObj)? <Offcanvas.Title>Menu {selectedDateObj.date}th {months[selectedDateObj.month]} 2025</Offcanvas.Title> : <Offcanvas.Title>Menu</Offcanvas.Title>
            }
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          <div className="add-view-btn">
            
           <button className="add-btn" onClick={handleAddEventClick}>Add Event</button>
            <button className="view-btn" onClick={handleViewEventClick}>View Event</button>
              
            
          </div>

          {isAddEvent ? <AddEvent/> : <ViewEvent/>}
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function SideBar() {
    // handleEndClick(())
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default SideBar