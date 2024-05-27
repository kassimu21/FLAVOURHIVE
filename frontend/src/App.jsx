import { useEffect, useState } from "react";
import HomePage from './components/Homepage'
import "./App.css"
function App() {

  const [themecolor] = useState("primary_theme");
  return (
    <div className={`${themecolor}`}>
     <HomePage />
    </div>
  )
}

export default App
