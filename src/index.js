import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { FaStar } from 'react-icons/fa'

import reportWebVitals from './reportWebVitals'

const createArray = (length) => [...Array(length)]

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />
}

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  )
}

const App = () => {
  const [checked, setChecked] = useState(false)
  return <StarRating totalStars={4} />
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
