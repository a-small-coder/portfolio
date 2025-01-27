import React from 'react';
import Title from '../lib/Title/Title';

import './Introduce.scss';

import img from '../../img/introduce.jpg';
import Button from '../lib/Button/Button';
import { Link } from 'react-router-dom';



function Introduce(props) {

    const socials = props.data.contacts.map(el => {
        if (el.type === "simple") {
            return (
                <li key={el.id} className='socials-list__item'>
                    <p>
                        <span className="item__title">
                            {el.title}
                        </span>
                        <span className="item__text">
                            {el.data}
                        </span>
                    </p>
                </li>
            )
        }
        if (el.type === "list") {
            let icons = null
            if (el.data.length > 0) {
                icons = el.data.map(contact => (
                    <a 
                        key={contact.id} 
                        className={` _icon-${contact.icon}`}
                        href={contact.link} 
                        target="_blank" 
                        rel="noreferrer">
                        {/* {contact.name} */}
                    </a>
                ))
            }
            return (
                <li key={el.id} className='socials-list__item'>
                    <p>
                        <span className="item__title">
                            {el.title}
                        </span>
                        <span className="item__icons">
                            {icons}
                        </span>
                    </p>
                </li>
            )
        }
        return <></>
    })

    return (
        <section className="introduce section">
            <div className='__container'>


                <div className="introduce__row-content">

                <div className="introduce__image">
                        <div className="image-introduce">
                            <img src={img} className="img-responsive" alt="img"></img>
                        </div>
                    </div>

                    <div className="introduce__about-me about-me">
                        <Title
                            type="heading"
                            wrapperClass="about-me__title"
                            heading_lvl={2}
                        >
                            {props.data.heading}
                        </Title>

                        <div className="about-me__descr simple-description__content">
                            <p>{props.data.description}</p>
                        </div>

                        <ul className="about-me__socials socials-list">
                            {socials}
                        </ul>

                        <div className='about-me__buttons'>
                            <a target='_blank' href='https://t.me/DubrovinOlegV'>
                            <Button
                                type="control"
                                wrapperClass="contact-btn"
                            >
                                Связаться
                            </Button>
                            </a>
                        </div>

                    </div>

                    
                </div>

            </div>
        </section>
    );
}

export default Introduce;