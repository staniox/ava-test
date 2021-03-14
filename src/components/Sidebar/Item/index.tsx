import React from 'react';
import checkIcon from '../../../assets/icons/check-icon.svg'
import {ISidebarItem} from "../../../interfaces";
import {ReactSVG} from "react-svg";
import "./styles.css"


const SidebarItem = (props:ISidebarItem) => {
    return (
        <button className="sidebar-item flex ai-center jc-space-evenly" onClick={props.onClick} value={props.id}>
               <i> <ReactSVG src={checkIcon} /></i>
           {props.title}
        </button>
    );
};

export default SidebarItem;