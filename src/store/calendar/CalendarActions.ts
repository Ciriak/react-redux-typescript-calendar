
import { calendarActionTypes, SET_DATE, SET_CALENDAR_USER, SET_CALENDAR_EVENT, CLOSE_EVENT_CREATOR, UPDATE_EVENT } from './types'
import IUser from '../../interfaces/user.interface'
import IEvent from '../../interfaces/event.interface'
/**
 * Set the current app date view
 * @param date 
 */
export function setDate(date: Date): calendarActionTypes {
    return {
        type: SET_DATE,
        payload: {
            date
        }
    }
}

/**
 * Set the current app date view
 * @param date 
 */
export function setCalendarUser(user: IUser): calendarActionTypes {
    return {
        type: SET_CALENDAR_USER,
        payload: {
            user
        }
    }
}

/**
 * Close the event creation modal
 */
export function closeEventCreator(): calendarActionTypes {
    return {
        type: CLOSE_EVENT_CREATOR,
    }
}

/**
 * Set the event that is beeing modified
 * @param date 
 */
export function setCalendarEvent(event: IEvent): calendarActionTypes {
    return {
        type: SET_CALENDAR_EVENT,
        payload: {
            event
        }
    }
}

/**
 * Update an event by it's ID, if it doesn't exist it will be created
 * @param event 
 */
export function updateEvent(event: IEvent): calendarActionTypes {
    return {
        type: UPDATE_EVENT,
        payload: {
            event
        }
    }
}