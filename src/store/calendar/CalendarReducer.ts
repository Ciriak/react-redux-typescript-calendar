
import {
    ICalendarState, calendarActionTypes, SET_DATE
} from './types'

const initialState: ICalendarState = {
    date: new Date()
}

export function calendarReducer(
    state = initialState,
    action: calendarActionTypes
): ICalendarState {
    switch (action.type) {
        case SET_DATE:
            return {
                //other ex: messages: [...state.messages, action.payload]
                date: action.payload.date
            }

        default:
            return state
    }
}