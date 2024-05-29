import { useEffect, useState } from "react";
import HomePage from "./components/Homepage";
import "./App.css";
import { RecipesProvider } from "./context/RecipesContext";
import Allroutes from "./Allroutes";
function App() {
  const [themecolor] = useState("primary_theme");
  return (
    <RecipesProvider>
      <div className={`${themecolor}`}>
        <Allroutes />
      </div>
    </RecipesProvider>
  );
}

export default App;
