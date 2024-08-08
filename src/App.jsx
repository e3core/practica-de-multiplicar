import { useEffect } from "react";
import { useState} from "react"
import './App.css'

function App() {
  const [result,setResult] = useState("")
  const [numberTable,setNumberTable] = useState(null)
  const [numberMultiplication,setNumberMultiplication] = useState(0)
  const [random,setRandom] = useState(null)
  const [multiplication,setMultiplication] = useState(null)
  const [messageResponse,setmessageResponse] = useState(null)
  const [visualTable,setVisualTable] = useState(true)
  const [styleMessage,setStyleMessage] = useState("")

  function handleChange(event) {
    setResult(event.target.value)
  }

  function handleChangetwo(event) {
    setMultiplication(event.target.value)
  }

  function formSubmit(event) {
    event.preventDefault()
    if(numberTable !== null){
      setNumberTable(Number(result))
      
    }
    
  }

  function checkedNumberMultiplication() {
    const numberChecked = Number(result)
    if ( numberChecked !== isNaN ) {
      if (numberChecked > 0 &&  numberChecked <=10) {
        setNumberMultiplication(Number(result))
      }
    }

  }

  function generator() {
    const numberAlter = Math.random() * 10
    const numberInt = Math.round(numberAlter)
    setRandom(numberInt)
    setmessageResponse(null)
    return random 
  }
  
  function VerifyMultiplication() {
    const multiplicationResult = numberMultiplication * random
    const inputResponse = Number(multiplication)
    if ( multiplicationResult === inputResponse) {
      setStyleMessage("correct_response")
      setmessageResponse("Correcto buena respuesta")
    } else {
      setStyleMessage("incorrect_response")
      setmessageResponse("Incorrecto intentalo de nuevo")
    }
  }
  
  function visualTableM(event) {
    setVisualTable(event.target.checked)
  }
  useEffect(() => {
    if (numberTable <= 0 || numberTable > 10 ){
      setNumberTable(null)
    } 
  },[numberTable])

  useEffect(() => {
    if( visualTable ) {
      setNumberTable(null)
    } else {
      setNumberTable(Number(result))
    }
  },[visualTable,result])
    return (

        <div>
          <div className="checkbox">
            <h4>Mostrar tabla</h4>
            <label className="switch">
              <input type="checkbox" name="visualTable" id="" onChange={visualTableM} checked={visualTable}/>
              <span className="slider"></span>
            </label>
            
          </div>
          <div className="card">
            <div>
              <div className="card_calculation">
                <form  onSubmit = {formSubmit} action="" id="form_table">
                  <h2>Ingrese un numero entre 1 y 10</h2>
                  <input value={result} type="number" name="selectNumber" onChange={handleChange}/>
                  <button onClick={checkedNumberMultiplication}>ingresar</button>
                </form>
                <div>{ numberTable !== null && (
                  <div>{
                  Array.from({ length: 10},(_,index) => (
                  
                    <p key={index + 1}>{numberTable} x {index + 1} = {(index + 1) * numberTable} </p>
                  ))
                  }</div>              
                )
                }</div>
              </div>
            </div>
            <div className="card_calculation_center card_calculation">
              <div className="card_calculation_center">
                <h2>Genere su multiplicacion</h2>
                <button onClick={generator}>generar</button>
              </div>
              <div className="card_calculation_center">
                {random !== null &&
                <h1>{numberMultiplication} x {random}</h1>
                }
                <input type="number" onChange={handleChangetwo}/>
                <button onClick={VerifyMultiplication}>ok</button>
                {messageResponse !== null && 
                <h3 className={styleMessage}>{messageResponse}</h3>}
              </div>
            </div>
          </div>
                  
        </div>
        
    )
}

export default App
