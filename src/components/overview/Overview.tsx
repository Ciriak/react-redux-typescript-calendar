import React from 'react';
import { Card, Button, Dropdown } from "react-bootstrap";
import "./overview.scss"
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

import { setCalendarUser } from '../../store/calendar/CalendarActions';
import IUser from '../../interfaces/user.interface';
function Overview() {

    const selectUsers = (state: RootState) => state.calendar.usersList;
    const selectCurrentCalendarUser = (state: RootState) => state.calendar.currentUser;
    const usersList = useSelector(selectUsers);
    const calendarUser = useSelector(selectCurrentCalendarUser);
    const dispatch = useDispatch();
    const usersComponents = [];

    for (const user of usersList) {
        usersComponents.push(
            <Dropdown.Item key={`user-${user.name}`} href="#" onClick={() => {
                handleUserChange(user)
            }}>
                <img src={user.avatarUrl} className="person-avatar" alt={user.name} /> {user.name}
            </Dropdown.Item>)
    }

    function handleUserChange(user: IUser) {
        dispatch(setCalendarUser(user));
    }

    return (
        <div className="overview">
            <Card>
                <Card.Header>
                    <Dropdown>
                        <strong>Viewing the calendar of </strong>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <img src={calendarUser.avatarUrl} className="person-avatar" alt={calendarUser.name} /> {calendarUser.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {usersComponents}
                        </Dropdown.Menu>

                    </Dropdown>

                </Card.Header>
                <Card.Body>
                    <Card.Title>Mini calendar here</Card.Title>
                    <Card.Text>
                        ... coming soon
                    </Card.Text>
                    <Button variant="primary">(probably never))</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Overview;