import React from 'react';
import menuIcon from '../../assets/icons/menu-icon.svg'
import './styles.css'
import {ITopBar} from "../../interfaces";



const TopBar = (props:ITopBar) => {
    return (
        <div className="topbar-container flex ai-center jc-space-between">
            <div id="left-menu" className="flex ai-center jc-flex-start">
                <img src={menuIcon}  alt="icon menu" onClick={props.onclickMenu}/>
                <span className="flex ai-center">AVA Teste</span>
            </div>
            <div id="right-menu">
                <span id="info-menu">i</span>
            </div>
        </div>
    );
};

export default TopBar;
