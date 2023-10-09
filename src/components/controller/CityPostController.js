import React, {useEffect, useState} from "react";

import SpaceView from "../view/SpaceView";
import UserComponent from "../UserComponent";
import UserView from "../view/UserView";
import RegisterView from "../view/RegisterView";
import {useParams, useSearchParams} from "react-router-dom";
import CityPostViewComponent from "../view/city/CityPostViewComponent";

export default function CityPostController(props) {

    const {id} = useParams();

    return (
        <CityPostViewComponent id={id} user={props.user}/>
    );
}