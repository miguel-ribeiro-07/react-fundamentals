// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // Referência a formulário
  let usernameRef = React.useRef()
  //Criar um estado
  /*
  React.setState() retorna um VETOR noo qual
  * o 1 elemento é a variavel que vai armazenar o estado
  * o 2 elemento é o nome de uma função que será usada para atualizar o estado.
  * Sendo usado o nome set + nome
  */
  let [error, setError] = React.useState('')
    
    function handleChange(event){
    const username = event.target.value
        if(username.toLowerCase() !== username){
            setError('Username deve ser em minusculo')
        }else setError('') 
    }
    function handleSubmit(event){
    event.preventDefault()
    //const username = document.getElementById('username').value 
    /*
    event -> o evento de envio (submit)
    target -> o destino do evento, o formulário(form)
    elements[0] -> o primeiro elemento dentro do form
    */
    //const username = event.target.elements[0].value
    const username = usernameRef.current.value
    onSubmitUsername(username)
    }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} ref={usernameRef}id="username" type="text" />
  <div style={{color: 'red'}} role="alert">{error}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
