import React from "react";

import ConnectionView from "../view/ConnectionView";

export default function ConnectionController(props) {

    const backUrl = "http://localhost:8081/api/security";

    function fetchUser(login, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: login, password: password })
        };
        fetch(`${backUrl}/authorize`, requestOptions)
            .then(response => response.json())
            .then(json => props.setUser({
                token: json.token,
                id: json.user.id,
                name: json.user.name,
                surname: json.user.surname
            }));
        console.log(props.user);
    }

     return (
         <ConnectionView fetchUser={(login, password) => fetchUser(login, password)} />
     );
}