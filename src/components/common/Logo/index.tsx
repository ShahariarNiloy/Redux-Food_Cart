import React from 'react';
import './styles.css'
import logoImg from './logo.png'

function Logo(props:any) {
    return (
        <div className='header-content_logo'>
            <div>
            <img src={logoImg} alt="logo" />
            <span>
                <b>Taste</b>
            </span>
            </div>
            <p><b>Restaurant & BBQ</b></p>
        </div>
    );
}

export default Logo;