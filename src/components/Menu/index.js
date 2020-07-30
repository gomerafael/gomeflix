import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu () {
    return (
        <nav className = "Menu">
            <Link to = "/">
                <img className = "logo" src = {logo} alt = "Gomeflix Logo" height="40px"/>
            </Link>

            <Button as = {Link} className = "ButtonLink" to ="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>    
    );
}

export default Menu;