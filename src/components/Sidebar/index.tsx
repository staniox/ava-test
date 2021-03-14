import React from 'react';
import './styles.css'
import {ISidebarItemsArray} from "../../interfaces";
import SidebarItem from "./Item";



const Sidebar:(props: ISidebarItemsArray) => JSX.Element =  (props:ISidebarItemsArray) => {
    return (
        <div {...props} className={(!props.show ? "sidebar-hide " : "")+"sidebar-container flex-col "}>
            {props.items.map((item) =>{
                return(
                    <SidebarItem key={item.id} title={item.title} onClick={props.onClick} id={item.id} />
                )
            })}
            <hr/>
        </div>
    );
}

export default Sidebar;
