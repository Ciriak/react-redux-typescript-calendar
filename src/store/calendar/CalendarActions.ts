
import { calendarActionTypes, SET_DATE } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function setDate(date: Date): calendarActionTypes {
    return {
        type: SET_DATE,
        payload: {
            date
        }
    }
}