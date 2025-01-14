import { useState,createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Calendar from './components/calendar'
import yearCon from './data.js'
export const YearContext = createContext(yearCon);
function App() {
  const [year,setYear] = useState(yearCon)


  return (
    <>
      <YearContext.Provider value={{year,setYear}}>
        <Calendar/>
      </YearContext.Provider>
    </>
  )
}

export default App
