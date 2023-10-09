import React, {Component} from 'react';
import ResidentService from "./controller/ResidentService";

class ListAssociationPostComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            residents: []
        }
    }

    componentDidMount() {
        ResidentService.getResidents().then((res) => {
            this.setState({residents: res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Publication de niveau Association</h2>
                <div className="row" >
                    <table className = "table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Resident id</th>
                            <th>Resident address</th>
                            <th>Resident login</th>
                            <th>Resident name</th>
                            <th>Resident password</th>
                            <th>Resident surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.residents.map(
                                resident =>
                                    <tr key = {resident.id}>
                                        <td> {resident.residentId}</td>
                                        <td> {resident.address}</td>
                                        <td> {resident.login}</td>
                                        <td> {resident.name}</td>
                                        <td> {resident.password}</td>
                                        <td> {resident.surname}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListAssociationPostComponent