import React from 'react';
import { getSolution } from '../../algorithm';
import classes from './Button.module.css';
const Button = ({setVisible, settingResponse, a}) => {
    return (
        <p className={classes.line}>
            X <span onClick={() => {setVisible(true)
            settingResponse(getSolution(a))}} className={classes.button}>=</span>
        </p>
    );
};

export default Button;