import React, {Component} from "react";
import LeftColumnHomePageComponent from "./LeftColumnHomePageComponent";
import RightColumnComponent from "./RightColumnComponent";
import {Container} from "react-bootstrap";

class HomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
                <div className="homepage">
                    <Container className="containerFlex">

                        <LeftColumnHomePageComponent/>
                        <RightColumnComponent/>
                    </Container>

                </div>

        );
    }
}

export default HomePageComponent;