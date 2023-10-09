import ConnectionView from "../view/ConnectionView";
import React from "react";

import RegisterView from "../view/RegisterView"

export default function RegisterController(props) {

    const backUrl = "http://localhost:8081/api/security";

    function fetchUser(login, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: login, password: password })
        };
        fetch(`${backUrl}/register`, requestOptions)
            .then(response => response.json())
            .then(json => props.setUser({
                token: json.token,
                id: json.user.id,
                name: json.user.name,
                surname: json.user.surname
            }));
    }

    return (
        <RegisterView fetchUser={(login, password) => fetchUser(login, password)} />
    );
}