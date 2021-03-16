import React from 'react';
import {Link} from 'react-router-dom';

function GiftsItem(props) {
    return (
        <>
            <li className='gifts__items'>
                <Link className="gifts__item__link" to={props.path}>
                    <figure className="gifts__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="gift image" className="gifts__item__img"/>
                    </figure>
                    <div className="gifts__item__info">
                        <h5 className="gifts__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
};

export default GiftsItem