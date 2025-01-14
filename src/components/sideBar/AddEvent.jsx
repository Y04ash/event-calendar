import React, { useEffect,useContext } from "react";
import "./sideBar.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {useState,useRef}  from 'react'
import { YearContext } from "../../App";
import {DateContext} from '../calendar.jsx'
// todo :
// fix the 2 time submission of form 
// make view task and other
const AddEvent = () => {

    const {year,setYear} = useContext(YearContext);
    const { selectedMonth ,setSelectedMonth,selectedDateObj,setSelectedDateObj} = useContext(DateContext);

    const [name,setName]=useState()
    const [startTime,setStartTime]=useState()
    const [endTime,setEndTime]=useState()
    const [description,setDescription]=useState()
    const [type,setType]=useState()
    
    const handleNameChange =(event)=> setName(event.target.value)
    const handleStartTimeChange =(event)=> setStartTime(event.target.value) 
    
    const handleEndChange =(event)=> setEndTime(event.target.value)
 
  
    const handleDescriptionChange =(event)=> setDescription(event.target.value)
    const handleTypeChange =(event)=> setType(event.target.value)

    const [id,setId] = useState(0)
    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Create the new event object
      const newEvent = { name, startTime, endTime, description, type, id };
  
      // Update the selected date object with the new event
      const key = selectedDateObj.key;
      const updatedMonth = year[selectedMonth].map((dateObj) =>
          dateObj.key === key
              ? { ...dateObj, eventData: [...(dateObj.eventData || []), newEvent] }
              : dateObj
      );
  
      // Update the year array
      const updatedYear = year.map((month, index) =>
          index === selectedMonth ? updatedMonth : month
      );
  
      // Set the updated year
      setYear(updatedYear);
      const y = selectedDateObj
      setSelectedDateObj(year[selectedMonth].find((x)=> x.key === selectedDateObj.key))
      // Increment ID for next event
      setId((prevId) => prevId + 1);
   
      // Clear form inputs
      setName('');
      setStartTime('');
      setEndTime('');
      setDescription('');
      setType('');
  };
  
    useEffect(()=>{
        console.log("selectedObj add event",selectedDateObj)
    },[selectedDateObj])
    // useEffect(()=>{
    //     console.log("year are ",year)
    // },[year])
  return (
    <div className="add-event-wrapper">
      <Form onSubmit={handleSubmit}>
      {/* Event Name */}
      <Form.Group className="mb-3 autoheight" controlId="formEventName">
        <Form.Label className="autoheight">Event Name</Form.Label>
        <Form.Control type="text" placeholder="Enter event name" required className="autoheight" onChange={handleNameChange}/>
      </Form.Group>

      {/* Start Time */}
      <Form.Group className="mb-3 autoheight" controlId="formStartTime">
        <Form.Label className="autoheight">Start Time</Form.Label>
        <Form.Control type="time" className="autoheight" required onChange={handleStartTimeChange}/>
      </Form.Group>

      {/* End Time */}
      <Form.Group className="mb-3 autoheight" controlId="formEndTime">
        <Form.Label className="autoheight">End Time</Form.Label>
        <Form.Control type="time" className="autoheight" required onChange={handleEndChange} />
      </Form.Group>

      {/* Event Description */}
      <Form.Group className="mb-3 autoheight" controlId="formEventDescription">
        <Form.Label className="autoheight">Event Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter event description"
          className="autoheight"
          onChange={handleDescriptionChange}
        />
      </Form.Group>

      {/* Event Type Dropdown */}
      <Form.Group className="mb-3 autoheight" controlId="formEventType">
        <Form.Label className="autoheight" >Event Type</Form.Label>
        <Form.Select required className="autoheight" onChange={handleTypeChange}>
          <option value="" className="autoheight">Select event type</option>
          <option value="work" className="autoheight">Work</option>
          <option value="personal" className="autoheight">Personal</option>
          <option value="other" className="autoheight">Other</option>
        </Form.Select>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit" className="autoheight">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default AddEvent;
