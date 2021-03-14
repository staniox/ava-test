import React, { useState} from 'react';
import './styles.css'
import TopBar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import itemsJson from "../../data/ItemList.json"
import Content from "../../components/Content";
import {ISidebarItem} from "../../interfaces";

const ActivitiesList = () => {
    const [showSide, setShowSide] = useState(true)
    const content:ISidebarItem = {id:0,title:'', content:''}
    const [bodyContent, setBodyContent] = useState(content);

    const database = itemsJson.items;


    const handlerMenu = () =>{
       setShowSide(!showSide)
    }
    const getContent = (id:number) =>{
        for (let i=0; i<= database.length; i++){
                if (database[i].id === id)
                    return database[i]
        }
        return content
    }
    const handlerItemSidebar= (e:any) =>{
        e.preventDefault()
        e.target.focus()
        if(!e.target.value)
            return

        let id =e.target.value
       setBodyContent(getContent(parseInt(id)))
    }
    return (
        <div className="activities-list-page-container">
            <TopBar onclickMenu={handlerMenu} />
            <div className="alp-body flex">
                <Sidebar items={itemsJson.items} onClick={handlerItemSidebar} show={showSide}/>
                <Content title={bodyContent.title} content={bodyContent.content} id={bodyContent.id} />
            </div>
        </div>
    );
};

export default ActivitiesList;
