import React from 'react';
import Title from '../lib/Title/Title';

import zigzag from '../../img/image.png';

import './Skills.scss';
import SimpleDescription from '../lib/SimpleDescription/SimpleDescription';
import TextBlock from '../lib/TextBlock/TextBlock';

function Skills(props) {

    const rowSectionData = props.data.sections.map( section => (
        <div key={section.id} className="content-section__item">
            <TextBlock key={section.id} data={section} wClass="content-container__item"/>
        </div>
    ))

    return (
        <section className="skills section">
            <div className='__container'>

                <div className="skills__row row-section">
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

                    <div className="row-section__content content-section">
                        {rowSectionData}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Skills;