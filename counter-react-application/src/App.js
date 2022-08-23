import logo from './logo.svg';
import './App.css';
import {createContext, useState} from "react";
import { BrowserRouter as Router, Routes, Link,Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


const counterContext=createContext(null);

  const Controls=()=>{

  return(

     <counterContext.Consumer>    
    {
      ([counter,setCounter])=> 
      
      {
        function incrementCounter(){

          setCounter(prevValue=>prevValue+1);

        }

        function decrementCounter(){

          counter>0?setCounter(prevValue=>prevValue-1):setCounter(0);

        }




        return(


        <div>
        <p>{counter}</p>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
        </div>
      )
    
    
    }

    }

  </counterContext.Consumer>  
 

  )
}

 const Home=()=>{

  return(
  <counterContext.Consumer>    
    {
      ([counter])=> <p>{counter}</p>
    }


  </counterContext.Consumer>  
 
  );
}


function App() {

   const [counter,setCounter]=useState(0);


  return (
    <counterContext.Provider value={[counter,setCounter]}>
    <div className='App container'>
      <Router>

      <Link to="/">Home</Link>
      <Link to="/controls">Controls</Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/controls" element={<Controls/>}/>
        </Routes>

      </Router>
      </div>
      </counterContext.Provider>
  );
}

export default App;
