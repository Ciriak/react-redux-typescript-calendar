import React from 'react';
import { Card, Button, Dropdown } from "react-bootstrap";
import "./overview.scss"
function Overview() {
    return (
        <div className="overview">
            <Card>
                <Card.Header>
                    <Dropdown>
                        <strong>Viewing the calendar of </strong>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <img src="http://lorempixel.com/48/48/abstract/" className="person-avatar" alt="John doe" /> John Doe
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <img src="https://i.imgur.com/sLSlIND.png" className="person-avatar" alt="Jc" /> Jean claude
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <img src="https://i.imgur.com/38KuJvQ.png" className="person-avatar" alt="Gabe" /> Gabe Newell
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <img src="https://i.imgur.com/7NyaOjK.png" className="person-avatar" alt="corona" /> Covid-19
                            </Dropdown.Item>
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