import React, { useState, useEffect} from 'react';

import {Link} from  'react-router-dom'

import logoimg from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'

import studyicon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import  './styles.css';
import api from '../../services/api';
function Landing(){
    const [totalconnections, setTotalConnections] = useState(0);

    
    useEffect(()=>{
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total);      
        });
    }, []);
    


    return( 
       <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
 
                
                <img src={landing} alt="Platafomra de estudos" className="hero-image"/>
                
                <div className="buttons-container">
                    <Link to="/study"  className="study">
                        <img src={studyicon} alt="Estudar"/>
                       <h3> Estudar</h3>
                    </Link>
                    <Link to="give-classes"  className="give-classes">
                        <img src={giveClassesIcon} alt="Give Classe"/>
                        <h3>Give Classe</h3>
                    </Link>
                </div>
                <span className="total-conections">
                    Total de {totalconnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
       </div>
    )
}

export default Landing;