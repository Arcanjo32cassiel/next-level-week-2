import React from 'react';

import { Link } from 'react-router-dom';


import logoImg from '../../assets/images/logo.svg'
import backicon from '../../assets/images/icons/back.svg'


import './styles.css';
interface PageHeaderprops{
    title:string;
    description?:string;
}

const  PageHeader:React.FC<PageHeaderprops> = (props) =>{
    return(
        
        <header className="page-header">
        <div className="top-bar-container">
                <Link to="/">
                    <img src={backicon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.description && <p>{props.description}</p> }
        {props.children}

        </div>

    </header>
    )
}
export default PageHeader;