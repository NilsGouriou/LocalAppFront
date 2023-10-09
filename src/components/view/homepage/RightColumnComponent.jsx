import React, {Component} from "react";

class RightColumnComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="right-columns">
                <div className="right-column">
                    <h2>Right Column 1</h2>
                    <p>This is the content for Right Column 1.</p>
                </div>
                <div className="right-column">
                    <h2>Right Column 2</h2>
                    <p>This is the content for Right Column 2.</p>
                </div>
            </div>
        );
    }
}

export default RightColumnComponent;