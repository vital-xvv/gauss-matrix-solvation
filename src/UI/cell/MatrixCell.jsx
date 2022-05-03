import React from 'react';
import classes from './MatrixCell.module.css'

const MatrixCell = ({row, column, setCell}) => {
    return (
        <input 
            type='text'

            onChange={ (e) => {
                setCell(row, column, e.target.value)
            }}

            className={classes.matrixCell}
        />
    );
};

export default MatrixCell;