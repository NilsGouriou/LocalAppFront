import React, {Component} from 'react';
import CityPostService from "../../controller/CityPostService";
import {Link, useNavigate} from "react-router-dom";
import {Button, Container} from "react-bootstrap";

class ListCityPostComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityPost: []
        }
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `newPath`;
        this.props.history.push(path);
    }


    componentDidMount() {
        CityPostService.getCityPosts().then((res) => {
            this.setState({cityPost: res.data});
        })
    }

    addPost() {
        this.props.history.push('/city/add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Publication de niveau Ville</h2>
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between mb-3">
                            <Link
                                to={{
                                    pathname: "/city/add", // The target route
                                    state: { user: this.props.user }, // Pass the user prop in the state
                                }}
                            >
                                <Button variant="contained" color="success" className="mb-3 btn btn-success"
                                        style={{marginLeft: '10px', padding: '5px 10px'}}>
                                    Créer
                                </Button>
                            </Link>
                                {/* You can adjust the spacing by adding margin to the button */}
                        </div>
                        {/*<Button variant="contained" color="success" className="mb-3 btn btn-success">*/}
                        {/*    Créer*/}
                        {/*</Button>*/}
                        <Container fluid>
                            <table className="table table-striped table-bordered w-100">
                                <thead>
                                <tr>
                                    <th className="author-column">Auteur</th>
                                    <th>Titre</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.cityPost.map((cityPost) => (
                                    <tr key={cityPost.cityPostId}>
                                        <td>
                                            <Link to={`../space/user/${cityPost.author.id}`}>
                                                {cityPost.author.name} {cityPost.author.surname}
                                            </Link>
                                        </td>
                                        <td><Link to={`../city/${cityPost.cityPostId}`}>
                                            {cityPost.title}
                                        </Link>

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </Container>
                    </div>
                </div>
            </div>
    );
    }


    }

    export default ListCityPostComponent