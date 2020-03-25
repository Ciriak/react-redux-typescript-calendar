import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from '../../events'
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../store/calendar/CalendarActions';
import { RootState } from '../../store';
// import * as dates from '../../utils/dates'

const localizer = momentLocalizer(moment);
function RCalendar() {
  const date = useSelector<RootState>(state => state.calendar.date);
  return (
    <div className="demo-calendar">
      <Calendar
        events={events}
        step={60}
        defaultView="week"
        views={['month', 'week', 'day']}
        defaultDate={new Date()}
        localizer={localizer}
      />
    </div>
  );
}

export default RCalendar;
