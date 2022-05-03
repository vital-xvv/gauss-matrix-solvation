import React from 'react';
import MatrixCell from '../cell/MatrixCell';

const Matrix = ({rows, columns, setSingleCell, role}) => {

  

    return (
        <div style={{ minWidth: "300px", minHeight: '100px',display:'grid', gridTemplateColumns: `repeat(${columns}, 60px)`}}>
            {
                role 
                ? 
                new Array(rows).fill(0).map(() => new Array(columns).fill(0)).map((array, index1) => array.map((el, index2) => {
                    return <MatrixCell  setCell={setSingleCell} row={index1} column={rows}/>
                } ))
                :
                new Array(rows).fill(0).map(() => new Array(columns).fill(0)).map((array, index1) => array.map((el, index2) => {
                    return <MatrixCell  setCell={setSingleCell} row={index1} column={index2}/>
                } ))
            } 
        </div>
    );
};

export default Matrix;