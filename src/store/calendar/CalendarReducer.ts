
import {
    ICalendarState, calendarActionTypes, SET_DATE, SET_CALENDAR_USER, SET_CALENDAR_EVENT
} from './types'

import { johnDoe, gaben, corona, jeanClaude } from "../../data/users";

const initialState: ICalendarState = {
    date: new Date(),
    currentUser: johnDoe,
    usersList: [johnDoe, gaben, corona, jeanClaude],
}

export function calendarReducer(
    state = initialState,
    action: calendarActionTypes
): ICalendarState {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: action.payload.date
            }

        case SET_CALENDAR_USER:
            return {
                ...state,
                currentUser: action.payload.user
            }

        case SET_CALENDAR_EVENT:
            return {
                ...state,
                currentEvent: action.payload.event
            }


        default:
            return state
    }
}