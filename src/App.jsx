import { getDatabase , ref, set } from "firebase/database";
import {app} from "./firebase.js";

const database = getDatabase(app);

function App() {
  

  const storeData =()=>{
    set(ref(database,"users/kapil"),{
      id:'name',
      age:'29',
      height:79
    })
  }

  return (
   <>
   hello
   <button onClick={storeData}>Send Data</button>

   </>
  )
}

export default App
