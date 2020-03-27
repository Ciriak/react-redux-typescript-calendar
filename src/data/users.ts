import IUser from "../interfaces/user.interface";
import { guid } from "../utils";
import faker from "faker";

export const johnDoe: IUser = {
    name: "John Doe",
    avatarUrl: "https://i.imgur.com/0aA0G1q.png",
    events: [
        {
            id: guid(),
            desc: "Stay confined because what else do i have to do anyway ?",
            title: "Stay confined",
            start: new Date("March 20, 2020 12:00:00"),
            end: new Date("April 15, 2020 12:00:00")
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: "Carrefour Drive",
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        }
    ]
}

export const jeanClaude: IUser = {
    name: "Jean Claude",
    avatarUrl: "https://i.imgur.com/sLSlIND.png",
    events: [
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        }
    ]
}

export const gaben: IUser = {
    name: "Gabe Newell",
    avatarUrl: "https://i.imgur.com/38KuJvQ.png",
    events: [
        {
            id: guid(),
            desc: "Stay confined because what else do i have to do anyway ?",
            title: "Stay confined",
            start: new Date("March 20, 2020 12:00:00"),
            end: new Date("April 15, 2020 12:00:00")
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        },
        {
            id: guid(),
            desc: "Lorem ipsum",
            title: "Carrefour Drive",
            start: new Date("March 25, 2020 12:00:00"),
            end: new Date("March 25, 2020 13:00:00")
        }
    ]
}

export const corona: IUser = {
    name: "Covid-19",
    avatarUrl: "https://i.imgur.com/7NyaOjK.png",
    events: [
        {
            id: guid(),
            desc: "---",
            title: "Spread",
            start: new Date("February 03, 2020 12:00:00"),
            end: new Date("December 24, 2020 12:00:00")
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        },
        {
            id: guid(),
            desc: faker.random.words(5),
            title: faker.random.words(5),
            start: faker.date.recent(),
            end: faker.date.recent(-1)
        }
    ]
}