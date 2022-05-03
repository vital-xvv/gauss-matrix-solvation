import React from 'react';
import classes from './Matrix.module.css';

const MatrixResponse = ({array}) => {
    return (
        <div className={classes.response}>
            <div className={classes.text}>X =</div>
            <div className={classes.matrix}>
                {array.map(el => {
                    return <p className={classes.matrixResCell}>{el}</p>
                } )}
            </div>
                
        </div>
    );
};

export default MatrixResponse;