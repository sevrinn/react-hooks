import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { FaStar } from 'react-icons/fa'

import reportWebVitals from './reportWebVitals'

const App = () => {
  const [name, setName] = useState('Sev')
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    console.log(`Celebrate ${name}`)
  }, [name])

  useEffect(() => {
    console.log(`The user is: ${admin ? 'admin' : 'not admin'}`)
  }, [admin])

  return (
    <section>
      <p>Congratulations {name}</p>
      <button onClick={() => setName('Frogger')}>Change Winner</button>
      <p>{admin ? 'logged in' : 'not logged in'}</p>
      <button onClick={() => setAdmin(true)}>Log In</button>
    </section>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App name='Sev' />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
