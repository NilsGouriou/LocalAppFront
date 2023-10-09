import React, {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Welcome from "./Welcome";
import ConnectionController from "./controller/ConnectionController";
import SpaceController from "./controller/SpaceController";
import ListResidentComponent from "./ListResidentComponent";
import ListCityPostComponent from "./view/city/ListCityPostComponent";
import ListAssociationPostComponent from "./ListAssociationPostComponent";
import ListParticularPostComponent from "./ListParticularPostComponent";
import HeaderComponent from "./view/structure/HeaderComponent";
import FooterComponent from "./view/structure/FooterComponent";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import RegisterController from "./controller/RegisterController";
import UserComponent from "./UserComponent";
import UserView from "./view/UserView";
import SideBarComponent from "./SideBarComponent";
import HomePageComponent from "./view/homepage/HomePageComponent";
import CreateCityPostComponent from "./view/city/CreateCityPostComponent";
import CityPostViewComponent from "./view/city/CityPostViewComponent";
import CityPostController from "./controller/CityPostController";

export default function App() {

    const [user, setUser] = useState(null);
    const [target, setTarget] = useState(null);

    function userName() {
        return user !== null ? `${user.name} ${user.surname}` : "";
    }

    function handleLogin(user) {
        setUser(user);
    }

    function handleLogout() {
        // Perform logout actions here, such as clearing user data and session
        setUser(null); // Reset the user state to null

        // Redirect the user to the main page (or any other desired route)
        history.push("/"); // Redirect to the main page
    }

    return (
        <div>
            <Router>
                <HeaderComponent/>
                <Navbar className="mb-5" collapseOnSelect="true" bg="black" variant="dark" sticky="top" expand="md">
                    <Container>
                        <Navbar.Brand className="fst-italic">{userName()}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link eventKey="1" as={Link} to="/welcome">
                                    <i className="fa fa-home me-2"></i>
                                    Accueil
                                </Nav.Link>
                                <Nav.Link eventKey="1" as={Link} to="/residents">
                                    <i className="fa fa-home me-2"></i>
                                    Liste
                                </Nav.Link>
                                <Nav.Link eventKey="2" as={Link} to="/space" hidden={user === null}>
                                    <i className="fa fa-user me-2"></i>
                                    Mon espace
                                </Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to="/connection" hidden={user !== null}>
                                    <i className="fa fa-key me-2"></i>
                                    Connexion
                                </Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to="/register" hidden={user !== null}>
                                    <i className="fa fa-key me-2"></i>
                                    Register
                                </Nav.Link>
                                {/*<Nav.Link eventKey="4" as={Link} to="/welcome" onClick={handleLogout} hidden={user === null} >*/}
                                {/*    <i className="fa fa-unlock me-2"></i>*/}
                                {/*    Déconnexion*/}
                                {/*</Nav.Link>*/}
                                <Nav.Link eventKey="1" as={Link} to="/city">
                                    <i className="fa fa-home me-2"></i>
                                    Ville
                                </Nav.Link>
                                <Nav.Link eventKey="1" as={Link} to="/association">
                                    <i className="fa fa-home me-2"></i>
                                    Asso
                                </Nav.Link>
                                <Nav.Link eventKey="1" as={Link} to="/particular">
                                    <i className="fa fa-home me-2"></i>
                                    Particulier
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <article>
                   <Container className="container-with-border">
                           <Routes>
                               <Route exact path="/" element={<HomePageComponent/>}/>
                               <Route exact path="/welcome" element={<HomePageComponent />}/>
                               <Route exact path="/connection"
                                      element={<ConnectionController user={user} setUser={user => setUser(user)}/>}/>
                               <Route exact path="/register"
                                      element={<RegisterController user={user} setUser={user => setUser(user)}/>}/>
                               <Route exact path="/space/user"
                                      element={<SpaceController user={user} setUser={user => setUser(user)}/>}/>
                               <Route exact path="/residents" element={<ListResidentComponent />}/>
                               <Route exact path="/city" element={<ListCityPostComponent />}/>
                               <Route exact path="/association" element={<ListAssociationPostComponent />}/>
                               <Route exact path="/particular" element={<ListParticularPostComponent />}/>
                               <Route exact path="/space/user/:id"  element={<SpaceController />}/>
                               <Route exact path="/city/add"  element={<CreateCityPostComponent user={user} />}/>
                               <Route exact path="/city/:id"  element={<CityPostController user={user} />}/>
                           </Routes>

                   </Container>
                </article>

                <FooterComponent/>
            </Router>
        </div>
    );
}