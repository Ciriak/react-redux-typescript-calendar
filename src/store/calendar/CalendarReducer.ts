
import {
    ICalendarState, calendarActionTypes, SET_DATE, SET_CALENDAR_USER, SET_CALENDAR_EVENT, CLOSE_EVENT_CREATOR, UPDATE_EVENT
} from './types'
import { findIndex } from "lodash"

import { johnDoe, gaben, corona, jeanClaude } from "../../data/users";
import { defaultEvent } from '../../interfaces/event.interface';

const initialState: ICalendarState = {
    date: new Date(),
    currentUser: johnDoe,
    usersList: [johnDoe, gaben, corona, jeanClaude],
    currentEvent: defaultEvent,
    showNewEventCreator: false
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
                currentEvent: action.payload.event,
                showNewEventCreator: true
            }
        case CLOSE_EVENT_CREATOR:
            return {
                ...state,
                showNewEventCreator: false
            }

        case UPDATE_EVENT:
            // only update if the event is found
            const eIndex = findIndex(state.currentUser.events, { id: action.payload.event.id });
            let updateEvents = state.currentUser.events;
            if (eIndex > -1) {
                updateEvents[eIndex] = action.payload.event;
            }
            // add event if it doesn't exist yet
            else {
                updateEvents.push(action.payload.event)
            }
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    events: updateEvents
                }
            }


        default:
            return state
    }
}