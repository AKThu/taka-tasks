import { useState } from "react";
import Navbar from "./Navbar";
import TaskDisplay from "./TaskDisplay";


const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }


  return ( 
    <div className={`${darkMode && "dark"}`}>
      <div className="h-screen bg-white-rose dark:bg-dark-body transition-colors duration-200 font-Ubuntu">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <TaskDisplay />
      </div>
    </div>
   );
}
 
export default App;