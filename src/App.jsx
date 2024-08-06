import { useContext } from 'react'
import {Context} from "./Context/Context"
import Dashboard from "./routes/Dashboard"
import Login from "./routes/Login"
import './App.css'

function App() {
  const {token} = useContext(Context)
  return (
    token ? <Dashboard/> : <Login/>
  )
}

export default App
