import React from 'react';
import './Title.scss'

function Title(props) {
    let className = "heading"
    className = props.wrapperClass != null ?  props.wrapperClass + ` ${className}`: className
    let title
    const lvl1 = <h1 className='heading__title'>{props.children}</h1>
    const lvl2 = <h2 className='heading__title'>{props.children}</h2>
    const lvl3 = <h3 className='heading__title'>{props.children}</h3>
    switch (props.heading_lvl) {
        case 1:
            title = lvl1
            break;
        
        case 2:
            title = lvl2
            break;

        case 3:
            title = lvl3
            break;
    
        default:
            title = lvl3
            break;
    }
    if (props.type ==='heading'){
        
        return (
            <div className={className}>
                {title}
                <span className={`heading__dote _${props.heading_lvl}`}></span>
            </div>
        );
    }
    else{
        return (
            <div className={className}>
                {title}
            </div>
        );
    }
    
}

export default Title;