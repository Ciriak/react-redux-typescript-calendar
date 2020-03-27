import { Modal, Button, Form } from "react-bootstrap";
import React from 'react';
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setCalendarEvent } from "../../store/calendar/CalendarActions";

function CalendarEvent() {

    const selectCurrentCalendarEvent = (state: RootState) => state.calendar.currentEvent;
    const currentEvent = useSelector(selectCurrentCalendarEvent);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setCalendarEvent());
    }
    if (!currentEvent) {
        return (<> </>);
    }
    return (
        <>

            <Modal show={currentEvent !== undefined} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentEvent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Event title</Form.Label>
                            <Form.Control type="text" placeholder="Event title" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default CalendarEvent;