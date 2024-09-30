import RoutesApp from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'

export default function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>

  )
}