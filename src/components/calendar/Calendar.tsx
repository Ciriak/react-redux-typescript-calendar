import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { setDate, setCalendarEvent } from '../../store/calendar/CalendarActions';
import { RootState } from '../../store';
import "./calendar.scss"
import IEvent, { defaultEvent } from '../../interfaces/event.interface';
import { guid } from '../../utils';
// import * as dates from '../../utils/dates'

const localizer = momentLocalizer(moment);

function RCalendar() {
  const selectDate = (state: RootState) => state.calendar.date;
  const selectCurrentCalendaruser = (state: RootState) => state.calendar.currentUser;
  const date = useSelector(selectDate);
  const currentUser = useSelector(selectCurrentCalendaruser);
  const dispatch = useDispatch();

  const handleNavigate = (newDate: Date) => {
    dispatch(setDate(newDate));
  }

  const handleEventSelect = (event: IEvent) => {
    dispatch(setCalendarEvent(event));
  }

  const handleSelectSlot = (e: any) => {
    const newEvent = defaultEvent;
    newEvent.id = guid();
    newEvent.start = e.start;
    newEvent.end = e.end;
    dispatch(setCalendarEvent(newEvent));
  }



  return (
    <div className="calendar">
      <Calendar
        date={date}
        events={currentUser.events}
        step={60}
        selectable={true}
        defaultView="week"
        views={['month', 'week', 'day']}
        // defaultDate={new Date()}
        localizer={localizer}
        onNavigate={handleNavigate}
        onSelectEvent={handleEventSelect}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
}

export default RCalendar;
