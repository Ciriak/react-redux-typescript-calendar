import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from '../../events'
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../store/calendar/CalendarActions';
import { RootState } from '../../store';
import "./calendar.scss"
// import * as dates from '../../utils/dates'

const localizer = momentLocalizer(moment);

function RCalendar() {
  const selectDate = (state: RootState) => state.calendar.date;
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  const handleNavigate = (newDate: Date) => {
    dispatch(setDate(newDate));
  }

  return (
    <div className="calendar">
      <Calendar
        date={date}
        events={events}
        step={60}
        defaultView="week"
        views={['month', 'week', 'day']}
        // defaultDate={new Date()}
        localizer={localizer}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default RCalendar;
