import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CityPostService from "../../controller/CityPostService";

const CreateMessageComponent = ({ user, post }) => {
    const navigate = useNavigate();

    const [message, setMessage] = React.useState({
        body: '',
        author: user,
        addDate: new Date().toISOString().split('T')[0],
        cityPost: post
    });

    const saveMessage = (e) => {
        e.preventDefault();
        if (!message.body) {
            alert('Please fill in the message body field.');
            return;
        }
        const newMessage = {
            body: message.body,
            addDate: message.addDate,
            author: message.author,
            cityPost: message.cityPost
        };

        console.log(newMessage);
        console.log(user);

        CityPostService.createCityMessage(newMessage)
            .then((response) => {
                console.log('Response from server:', response.data);
                // navigate('/city');
            })
            .catch((error) => {
                console.error('Error from server:', error);
            });
        // You can use your MessageService to create the message
        // MessageService.createMessage(newMessage, postId)
        //     .then((response) => {
        //         console.log('Response from server:', response.data);
        //         // Optionally, you can redirect to a specific page after saving the message
        //         navigate(`/city/${postId}`); // Redirect to the city post page
        //     })
        //     .catch((error) => {
        //         console.error('Error from server:', error);
        //     });
    };

    return (
        <div>
            <h2 className="text-center">Add a Message</h2>
            <Form>
                <Form.Group controlId="formBody">
                    <Form.Label>Message Body</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your message here"
                        value={message.body}
                        onChange={(e) => setMessage({ ...message, body: e.target.value })}
                    />
                </Form.Group>

                <Button
                    variant="contained"
                    color="success"
                    className="mb-3 btn btn-success"
                    style={{
                        marginLeft: '10px',
                        padding: '5px 10px',
                        marginTop: '10px',
                    }}
                    onClick={saveMessage}
                >
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreateMessageComponent;
