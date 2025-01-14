
import './topCalendar.css'
import { useContext, useEffect,useState } from 'react';
import {DateContext} from '../calendar.jsx'
function DropDown() {
  const {selectedMonth,setSelectedMonth} = useContext(DateContext)
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  const currentFullDate = new Date();
  const [month, setMonth] = useState(currentFullDate.getMonth()); // Current month as a number (0-11)
  

   useEffect(() => {
    setSelectedMonth(month); 
    console.log("Selected month index in dropdown:", selectedMonth);
  }, [month]);
  
  const handleMonthChange = (event) => {
    
    // Update `month` state based on the dropdown selection
    const selectedValue =months.indexOf(event.target.value); 
    setMonth(selectedValue)
    // Convert string value to number
    console.log("selectedValue " , selectedValue)
    // setMonth(selectedValue); // Update `month`
    setSelectedMonth(selectedValue)
  };
  return (
    <div className="dropdown-wrapper flexCenter">
      <select name="month" id="month" className='drop-down-select' onChange={handleMonthChange} value={months[month]}>
        {months.map((mnth, index) => (
          <option key={index} value={mnth}>{mnth}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;