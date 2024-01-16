import { useState } from "react";
import Navbar from "./Navbar";
import TaskDisplay from "./TaskDisplay";


// start of firebase code
  import { initializeApp } from "firebase/app";
  import { 
    addDoc, deleteDoc, updateDoc,
    collection,
    getFirestore,
    onSnapshot
  } from "firebase/firestore";
// end of firebase code


const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ tasks, setTasks ] = useState();


  // start of firebase code
    const firebaseConfig = {
      apiKey: "AIzaSyAbfC5L6ru1Dj8Qf53LLNNdgMZ8Md1NbWo",
      authDomain: "taka-tasks.firebaseapp.com",
      projectId: "taka-tasks",
      storageBucket: "taka-tasks.appspot.com",
      messagingSenderId: "793456391730",
      appId: "1:793456391730:web:12f3987183e2ebfb7e2e2b",
      measurementId: "G-FMGM6MNEBM"
    };

    // init firebase app
    initializeApp(firebaseConfig);

    // init services
    const db = getFirestore();

    // collection reference
    const colRef = collection(db, 'tasks');

    // get collection data
    onSnapshot(colRef, (snapshot) => {
      let tasksData = []
      snapshot.docs.forEach((doc) => {
        tasksData.push( {...doc.data(), id: doc.id } )
      })
      setTasks(tasksData)
    })

    // add collection data
    function addData(data) {
      addDoc(colRef, data)
        .then(() => {

        })
    }

    // delete collection data
    function deleteData(docId) {
      const docRef = doc(db, 'tasks', docId)

      deleteDoc(docRef)
        .then(() => {

        })
    }

    function updateData(data) {
      updateDoc(colRef, data)
        .then(() => {

        })
    }
  // end of firebase code



  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }


  return ( 
    <div className={`${darkMode && "dark"}`}>
      <div className="h-screen bg-white-rose dark:bg-dark-body transition-colors duration-200 font-Ubuntu">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <TaskDisplay tasks={tasks}/>
      </div>
    </div>
   );
}
 
export default App;