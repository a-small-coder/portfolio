import React from 'react';
import TextBlock from '../lib/TextBlock/TextBlock';

import './BlockGenerator.scss';

function BlocksGenerator(props) {

    switch (props.type) {
        case 'grid':
            return props.data.sections.map( section => (
                    <TextBlock key={section.id} data={section} wClass="content-section__item"/>
            ))

        case 'column':
            return props.data.sections.map( section => (
                <TextBlock key={section.id} data={section} wClass="content-container__item"/>
            ))
    
        default:
            return props.data.sections.map( section => (
                <TextBlock key={section.id} data={section}/>
            ))
    }

    
}

export default BlocksGenerator;