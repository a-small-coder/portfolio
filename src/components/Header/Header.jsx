import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../lib/NavItem/NavItem';
import Title from '../lib/Title/Title';

import './Header.scss';

function Header(props) {

    const [menuOpen, setMenuOpen] = useState(false)
    const burgerRef = useRef(null)

    let mobileMenuClass = menuOpen ? "menu-open" : "menu-close"
    let mobileMenuBodyClass = menuOpen ? 'menu-body _active' : "menu-body"

    const burgerClick = ()=>{
        setMenuOpen(!menuOpen)
    }
    

    const data = [
        {
            id: 1,
            title: "Главная",
            link: "/portfolio"
        },
    ]

    const menuItems = data.map( el => (
        <NavItem key={el.id} link={el.link} wrapperClass="menu__item">{el.title}</NavItem>
    ))

    const mobilemenuItems = data.map( el => (
        <NavItem key={el.id} link={el.link} onClick={burgerClick} wrapperClass="menu__item">{el.title}</NavItem>
    ))

    return (
        <div className='header'>
            <div className='header__container'>
                <div className="header__logo">
                    <Link to='/portfolio'>
                        <Title 
                            type="heading" 
                            wrapperClass="header__logo_title"
                            heading_lvl = {1}
                        >
                            Logo
                        </Title>
                    </Link>
                    
                </div>

                <div className="header__menu menu">
                    {/* {menuItems} */}
                </div>

                <div className={mobileMenuClass}>

                    <div className='icon-menu' ref={burgerRef} onClick={burgerClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>  

                    <div className={mobileMenuBodyClass}>
                        {/* {mobilemenuItems}                         */}
                    </div>

                </div>

                
                 
            </div>
            
        </div>
    );
}

export default Header;