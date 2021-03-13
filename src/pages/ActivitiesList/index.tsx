import React from 'react';
import './styles.css'
import TopBar from "../../components/Topbar";

const ActivitiesList = () => {
    const handlerMenu = () =>{
        alert('teste')
    }
    return (
        <div>
            <TopBar onclickMenu={handlerMenu} />
        </div>
    );
};

export default ActivitiesList;
