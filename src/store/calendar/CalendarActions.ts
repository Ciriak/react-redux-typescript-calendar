
import { calendarActionTypes, SET_DATE } from './types'
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