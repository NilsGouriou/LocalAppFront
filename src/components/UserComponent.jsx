import React, {Component} from 'react';
import ResidentService from "./controller/ResidentService";
import UserService from "./controller/UserService";
import {Link, useParams} from "react-router-dom";
import * as promise from "axios";
import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/space/user/";

class UserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            target: [],
            targetId: props.targetId,
            cityPosts: [],
            associationPosts: [],
            individualPosts: []
        }
    }

    componentDidMount() {
        axios.all([
            UserService.getTargetedUSer(this.state.targetId),
            UserService.getCityPostByUser(this.state.targetId),
            UserService.getAssociationPostByUser(this.state.targetId),
            UserService.getIndividualPostByUser(this.state.targetId),
        ]).then(axios.spread((res1, res2, res3, res4) => {
            this.setState({
                target: res1.data,
                cityPosts : res2.data,
                associationPosts: res3.data,
                individualPosts: res4.data
            })
        }));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Resident</h2>
                <div className="row">
                    <h1> Nom d'utilisateur : {this.state.target.username}  </h1>
                    <br/>
                    <h2> Nom : {this.state.target.name}  </h2>
                    <h2> Prénom :{this.state.target.surname}  </h2>
                    <br/>
                    <br/>
                    <h1>Posts et messages : </h1>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Posts :</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                [this.state.cityPosts.map(
                                    cityPosts =>
                                        <tr key = {cityPosts.cityPostId}>
                                            <td> {cityPosts.cityPostId}</td>
                                            <td> {cityPosts.title} </td>
                                            {/*<td> <Link to={`../space/user/${cityPost.author.id}`} >{cityPost.author.name}  {cityPost.author.surname}</Link></td>*/}
                                        </tr>
                                ),
                                this.state.associationPosts.map(
                                    associationPosts =>
                                        <tr key = {associationPosts.associationPostId}>
                                            <td> {associationPosts.associationPostId}</td>
                                            <td> {associationPosts.title} </td>
                                            {/*<td> <Link to={`../space/user/${cityPost.author.id}`} >{cityPost.author.name}  {cityPost.author.surname}</Link></td>*/}
                                        </tr>
                                ),
                                this.state.individualPosts.map(
                                    individualPosts =>
                                        <tr key = {individualPosts.individualPostId}>
                                            <td> {individualPosts.individualPostId}</td>
                                            <td> {individualPosts.title} </td>
                                            {/*<td> <Link to={`../space/user/${cityPost.author.id}`} >{cityPost.author.name}  {cityPost.author.surname}</Link></td>*/}
                                        </tr>
                                )
                                ]
                            }
                            </tbody>
                        </table>
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Messages :</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                [this.state.cityPosts.map(
                                    cityPosts =>
                                        <tr key = {cityPosts.cityPostId}>
                                            <td> {cityPosts.cityPostId}</td>
                                            <td> {cityPosts.title} </td>
                                            {/*<td> <Link to={`../space/user/${cityPost.author.id}`} >{cityPost.author.name}  {cityPost.author.surname}</Link></td>*/}
                                        </tr>
                                ),
                                    this.state.associationPosts.map(
                                        associationPosts =>
                                            <tr key = {associationPosts.associationPostId}>
                                                <td> {associationPosts.associationPostId}</td>
                                                <td> {associationPosts.title} </td>
                                                {/*<td> <Link to={`../space/user/${cityPost.author.id}`} >{cityPost.author.name}  {cityPost.author.surname}</Link></td>*/}
                                            </tr>
                                    ),
                                    this.state.individualPosts.map(
                                        individualPosts =>
                                            <tr key = {individualPosts.individualPostId}>
                                                <td> {individualPosts.individualPostId}</td>
                                                <td> {individualPosts.title} </td>
                                                {/*<td> <Link to={`../space/user/${cityPost.author.id}`} >{cityPost.author.name}  {cityPost.author.surname}</Link></td>*/}
                                            </tr>
                                    )
                                ]
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserComponent
