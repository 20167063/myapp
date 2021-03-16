import React,{useState} from 'react'
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline']

const SIZES = ['btn--medium','btn--large']





export const Button = ({
    children, 
    type,
    onClick,
    buttuonStyle,
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttuonStyle) 
        ? buttuonStyle 
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        return(
            <Link to='sign-up' className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>

                
            </Link>
        )
}
