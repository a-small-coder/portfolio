import React from 'react';
import Title from '../lib/Title/Title';

import zigzag from '../../img/image.png';

import './LongRowSection.scss';
import TextBlock from '../lib/TextBlock/TextBlock';

function LongRowSection(props) {

    const sectionBlocks = props.data.sections.map( section => (
        <TextBlock key={section.id} data={section} wClass="content-container__item"/>
    ))

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

                    <div className="row-section__content content-container">
                        {sectionBlocks}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default LongRowSection;