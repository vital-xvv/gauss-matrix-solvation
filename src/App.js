import React, {useState} from 'react';
import Button from './UI/button/Button';
import Matrix from './UI/matrix/Matrix';
import MatrixResponse from './UI/matrix/MatrixResponse';
import ModalWin from './UI/modal/ModalWin';

function App() {

  const [number, setNumber] = useState(3)
  const [modal, setModal] = useState(false)
  const [a, setA] = useState(new Array(number).fill(0).map(() => new Array(number+1).fill(0)))
  const [response, setResponse] = useState(new Array(a.length).fill(0))


  const setSingleCell = (i , j , val) => {
    var copy = [...a]
    copy[i][j] = parseFloat(val)
    setA(copy)
    console.log(a)
  }







  return (
    <div className="App">
      <ModalWin visible={modal} setVisible={setModal}><MatrixResponse array={response}></MatrixResponse></ModalWin>
      <h1>Gauss Matrix Method</h1>
      <div style={{width: '100%', background: "#ddd"}}>
          <p>Select the number of variables:</p>
          <p>N:
            <select value={number} onChange={(e) => {
              var nn = parseInt(e.target.value)
              setNumber(nn)
              setA(new Array(nn).fill(0).map(() => new Array(nn+1).fill(0)))}}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </p>
          <div style={{textAlign: 'center'}}><p>Please enter the matrices:</p></div>
          <p>Matrix of coefficients:</p>
          <div>A:<Matrix rows={number} columns={number} role={false} setSingleCell={setSingleCell}/></div>
          <p>Matrix of free terms:</p>
          <div>B:<Matrix rows={number} role={true} columns={1} setSingleCell={setSingleCell}/></div>
          <Button setVisible={setModal} settingResponse={setResponse} a={a}></Button>
      </div>
    </div>
  );
}

export default App;
