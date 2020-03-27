import { guid } from "../utils";

export const defaultEvent: IEvent = {
    id: guid(),
    desc: "Lorem ipsum",
    title: "Lorem ipsum",
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