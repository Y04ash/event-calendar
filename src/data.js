import { createContext } from 'react';
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Helper function to generate the days for a month
function generateMonth(startDay, numDays,index) {
  console.log("index is",index)
  const month = [];
  let currentDayIndex = daysOfWeek.indexOf(startDay);

  for (let date = 1; date <= numDays; date++) {
    const padded = date.toString().padStart(2, '0');
    
    // Convert back to an integer
    const converted = parseInt(padded, 10);
    console.log(converted)
    month.push({
      date: converted,
      day: daysOfWeek[currentDayIndex],
      month:i,
      indexOfDay:currentDayIndex,
      key:`empty-${index}-${converted}`
    });

    // Move to the next day
    currentDayIndex = (currentDayIndex + 1) % 7;
  }
  return month;
}

// Number of days in each month (non-leap year)
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Generate the year starting from "Wednesday"
let startDay = "Wednesday";
let i=0;
const yearCon = daysInMonth.map((numDays) => {
  const month = generateMonth(startDay, numDays,i);
  // Update startDay for the next month
  const lastDayIndex = daysOfWeek.indexOf(month[month.length - 1].day);
  startDay = daysOfWeek[(lastDayIndex + 1) % 7];
  i = i+1
  return month;
});

export default yearCon