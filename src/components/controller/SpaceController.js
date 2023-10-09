import React, {useEffect, useState} from "react";

import SpaceView from "../view/SpaceView";
import UserComponent from "../UserComponent";
import UserView from "../view/UserView";
import RegisterView from "../view/RegisterView";
import {useParams, useSearchParams} from "react-router-dom";

export default function SpaceController(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();
    const [target, setTarget] = useState(null);

    const backUrl = "http://localhost:8081/api/space/user";

    function fetchUser(login, password) {

        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        fetch(`${backUrl}/${id}`, requestOptions)
            .then(response => response.json())
            .then(json => props.setTarget({
                id: json.user.id,
                name: json.user.name,
                surname: json.user.surname
            }));
        console.log(props.target);
    }

    return (
        <UserComponent targetId={id}/>
    );
}