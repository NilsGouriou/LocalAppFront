import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import CityPostService from '../../controller/CityPostService';

const CreateCityPostComponent = ({ user }) => {
    const navigate = useNavigate();

    const [state, setState] = React.useState({
        body: '',
        title: '',
        author: user,
        addDate: new Date().toISOString().split('T')[0],
    });

    const savePost = (e) => {
        e.preventDefault();
        if (!state.title || !state.body) {
            alert('Please fill in both title and body fields.');
            return;
        }
        const cityPost = {
            body: state.body,
            title: state.title,
            author: state.author,
            addDate: state.addDate,
        };

        CityPostService.createCityPost(cityPost)
            .then((response) => {
                console.log('Response from server:', response.data);
                navigate('/city');
            })
            .catch((error) => {
                console.error('Error from server:', error);
            });
    };

    return (
        <div>
            <h2 className="text-center">Ajouter un Post Ville</h2>
            <Form>
                <Form.Group controlId="formTitle">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer un titre"
                        value={state.title}
                        onChange={(e) => setState({ ...state, title: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formBody">
                    <Form.Label>Contenu</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Ecrire un contenu"
                        value={state.body}
                        onChange={(e) => setState({ ...state, body: e.target.value })}
                    />
                </Form.Group>

                <Link to="/city">
                    <Button
                        variant="contained"
                        color="success"
                        className="mb-3 btn btn-success"
                        style={{
                            marginLeft: '10px',
                            padding: '5px 10px',
                            marginTop: '10px',
                        }}
                        onClick={savePost}
                    >
                        Créer
                    </Button>
                </Link>

                <Link to="/city">
                    <Button
                        variant="contained"
                        color="success"
                        className="mb-3 btn btn-danger"
                        style={{
                            marginLeft: '10px',
                            padding: '5px 10px',
                            marginTop: '10px',
                        }}
                    >
                        Annuler
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default CreateCityPostComponent;
