import { Modal, Button, Form } from "react-bootstrap";
import React from 'react';
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { closeEventCreator, setCalendarEvent, updateEvent } from "../../store/calendar/CalendarActions";
import ReactDatePicker from "react-datepicker";
function CalendarEvent() {

    const selectCurrentCalendarEvent = (state: RootState) => state.calendar.currentEvent;
    const selectShowECreatorState = (state: RootState) => state.calendar.showNewEventCreator;
    const currentEvent = useSelector(selectCurrentCalendarEvent);
    const eventSnapshot = { ...currentEvent };
    const showCreator = useSelector(selectShowECreatorState);
    const dispatch = useDispatch();
    const handleClose = () => {
        // reset to snapshot
        dispatch(setCalendarEvent(eventSnapshot));
        dispatch(closeEventCreator());
    }

    const saveEvent = () => {
        // there is probably a way to manage side effects but hey
        dispatch(updateEvent(currentEvent));
        dispatch(closeEventCreator());
    }

    const handleValUpdate = (propName: string, value: any) => {
        dispatch(setCalendarEvent({ ...currentEvent, [propName]: value }))
    }

    return (
        <>
            <Modal show={showCreator} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentEvent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={saveEvent}>
                        <Form.Group>
                            <Form.Label>Event title</Form.Label>
                            <Form.Control type="text" value={currentEvent.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValUpdate("title", e.target.value)} placeholder="Event title" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Event description</Form.Label>
                            <Form.Control as="textarea" value={currentEvent.desc} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValUpdate("desc", e.target.value)} rows="3" />
                        </Form.Group>
                        <div>
                            <span>Start date</span>
                            <br />
                            <ReactDatePicker
                                className="form-control"
                                selected={currentEvent.start}
                                onChange={(date: Date) => handleValUpdate("start", date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                            <br />
                        </div>

                        <div>
                            <span>End date</span>
                            <br />
                            <ReactDatePicker
                                className="form-control"
                                selected={currentEvent.end}
                                onChange={(date: Date) => handleValUpdate("end", date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />

                        </div>



                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={saveEvent}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default CalendarEvent;