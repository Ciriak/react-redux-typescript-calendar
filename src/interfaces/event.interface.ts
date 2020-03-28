import { guid } from "../utils";

export const defaultEvent: IEvent = {
    id: guid(),
    desc: "Describe your new event",
    title: "My new event",
    start: new Date(),
    end: new Date(),
}

export default interface IEvent {
    id: string;
    title: string;
    start: Date,
    end: Date,
    desc: string
}