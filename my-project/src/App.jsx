import Navbar from "./Navbar";
import TaskDisplay from "./TaskDisplay";


const App = () => {
  return ( 
    <div className="h-screen bg-zinc-50">
      <Navbar />
      <TaskDisplay />
    </div>
   );
}
 
export default App;