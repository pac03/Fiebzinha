import RouteSistem from "./routes"
import { BrowserRouter} from "react-router-dom";
//import './App.css'

export default function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <RouteSistem />
      </BrowserRouter>
    </div>

  )
}