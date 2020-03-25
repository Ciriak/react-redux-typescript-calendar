import React from 'react';
import RCalendar from "./components/calendar/Calendar";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setDate } from './store/calendar/CalendarActions';

function App() {
  const date = useSelector<RootState>(state => state.calendar.date);

  return (
    <div className="App">
      <header className="App-header">
        {String(date)}
      </header>
      <RCalendar />
    </div>
  );
}

export default App;
