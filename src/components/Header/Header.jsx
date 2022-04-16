import React from 'react';
import NavItem from '../lib/NavItem/NavItem';
import Title from '../lib/Title/Title';

import './Header.scss';

function Header(props) {

    const data = [
        {
            id: 1,
            title: "Главная",
            link: "/"
        },
        {
            id: 2,
            title: "Резюме",
            link: "resume"
        },
        {
            id: 3,
            title: "Портфолио",
            link: "portfolio"
        },
        {
            id: 4,
            title: "Контакты",
            link: "contacts"
        },
    ]

    const menuItems = data.map( el => (
        <NavItem key={el.id} link={el.link} wrapperClass="menu__item">{el.title}</NavItem>
    ))

    return (
        <div className='header'>
            <div className='header__container'>
                <div className="header__logo">
                    <Title 
                        type="heading" 
                        wrapperClass="simple-description__title"
                        heading_lvl = {1}
                    >
                        Oleg
                    </Title>
                </div>

                <div className="header__menu menu">
                    {menuItems}
                </div>   
            </div>
            
        </div>
    );
}

export default Header;