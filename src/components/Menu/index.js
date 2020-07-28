import React from 'react'
import logo from '../../assets/img/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu () {
    return (
        <nav className = "Menu">
            <a href = "/">
                <img className = "logo" src = {logo} alt = "Gomeflix Logo"/>
            </a>

            <Button as = "a" className = "ButtonLink" href ="/">
                Novo vídeo
            </Button>
        </nav>    
    );
}

export default Menu;