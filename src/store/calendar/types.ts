

export const SET_DATE = 'SET_DATE'

export interface ICalendarState {
    date: Date
}

interface SetDateAction {
    type: typeof SET_DATE
    payload: {
        date: Date
    }
}

export type calendarActionTypes = SetDateAction;