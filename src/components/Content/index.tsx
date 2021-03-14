import React from 'react';
import {ISidebarItem} from "../../interfaces";
import './styles.css'

const Content = (props:ISidebarItem) => {
    return (
        <div id={"content-container-"+props.id} className="content-container">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Content;