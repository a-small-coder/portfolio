import React from 'react';
import Title from '../lib/Title/Title';
import BlocksGenerator from './BlocksGenerator';

import zigzag from '../../img/image.png';

import './LongRowSection.scss';


function LongRowSection(props) {

    const sectionBlockClass = `row-section__content ${props.data.type === 'grid' ? "content-section" : "content-container"}`

    return (
        <section className="section">
            <div className='__container'>

                <div className="row-section">
                    <div className="row-section__heading heading-section">
                        <div className="heading-section__text">
                            <Title
                                type="heading"
                                heading_lvl={2}
                                wrapperClass="heading-section__title"
                            >
                                {props.data.title}
                            </Title>
                            <p className="simple-description__content">
                                {props.data.description}
                            </p>
                        </div>

                        <div className="heading-section__image">
                            <img src={zigzag} alt=""></img>

                        </div>

                    </div>

                    <div 
                        className={sectionBlockClass} >
                        <BlocksGenerator
                            type={props.data.type}
                            data={props.data}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default LongRowSection;