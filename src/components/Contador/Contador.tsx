import './Contador.css'
import { useState } from 'react';
//nao esquecer da importacao!!!!

function Contador() {


  const [valor, setValor] = useState(0); // variavel de estado


  function somarMaisUm(){
    setValor(valor + 1) 
  }

  return (
    <div className="container">

        <p>O valor é: { valor }</p>
        <button onClick= { somarMaisUm }>Adicionar +1</button>

    </div>
  )
}
export default Contador