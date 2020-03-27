
import { calendarActionTypes, SET_DATE, SET_CALENDAR_USER, SET_CALENDAR_EVENT } from './types'
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
 * Set the current app date view
 * @param date 
 */
export function setCalendarEvent(event?: IEvent): calendarActionTypes {
    return {
        type: SET_CALENDAR_EVENT,
        payload: {
            event
        }
    }
}