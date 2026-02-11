import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       This Page is Deployed using Vite and GitHub Pages
       And In this project I have used Jenkins for CI/CD Pipeline
       And automatically deployed the code to GitHub Pages whenever I push the code to GitHub Repository
    </>
  )
}

export default App
