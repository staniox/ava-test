import React from 'react';
import menuIcon from '../../assets/icons/menu-icon.svg'
import './styles.css'

interface ITopBar {
    onclickMenu: () => void
}

const TopBar = (props:ITopBar) => {
    return (
        <div className="topbar-container">
            <div id="left-menu">
                <img src={menuIcon}  alt="icon menu" onClick={props.onclickMenu}/>
                  <span>AVA Teste</span>
            </div>
            <div id="right-menu">
                <span id="info-menu">i</span>
            </div>
        </div>
    );
};

export default TopBar;
