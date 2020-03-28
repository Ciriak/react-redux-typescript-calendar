import IUser from "../../interfaces/user.interface";
import IEvent from "../../interfaces/event.interface";


export const SET_DATE = 'SET_DATE'
export const SET_CALENDAR_USER = 'SET_CALENDAR_USER'
export const SET_CALENDAR_EVENT = 'SET_CALENDAR_EVENT'
export const CLOSE_EVENT_CREATOR = 'CLOSE_EVENT_CREATOR'
export const UPDATE_EVENT = 'UPDATE_EVENT'

export interface ICalendarState {
    date: Date;
    currentUser: IUser;
    usersList: IUser[];
    currentEvent: IEvent;
    showNewEventCreator: boolean;
}

interface SetDateAction {
    type: typeof SET_DATE
    payload: {
        date: Date
    }
}

interface SetCalendarEventAction {
    type: typeof SET_CALENDAR_EVENT
    payload: {
        event: IEvent
    }
}

interface SetCalendarUserAction {
    type: typeof SET_CALENDAR_USER
    payload: {
        user: IUser
    }
}

interface UpdateEventAction {
    type: typeof UPDATE_EVENT
    payload: {
        event: IEvent
    }
}

interface CloseEventCreator {
    type: typeof CLOSE_EVENT_CREATOR
}

export type calendarActionTypes = SetDateAction | SetCalendarUserAction | SetCalendarEventAction | CloseEventCreator | UpdateEventAction;