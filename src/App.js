import './App.css';
import { useState } from 'react';
import { TiTickOutline } from "react-icons/ti";
function App() {

  const steps=['A','B' ,'C','D'];
  const [currentstep,setCurrentStep]=useState(0);
  const handleclick=()=>{
    if(currentstep<steps.length-1){
      setCurrentStep(currentstep+1);
    }
  }
  return (
    <div className="App">
       <h1>Stepper Component</h1>
      <div className='stepper'>
        {steps.map((step,index)=>(
          <div className='stepper-item' key={index}>
            <div className={`circle ${index===currentstep && currentstep!==steps.length-1?'initial':index<=currentstep?'active':''}`}>
              {index<currentstep || currentstep===steps.length-1?<span><TiTickOutline /></span>:step}</div>
            <div>{index<steps.length-1 && (<div className={`line ${index<currentstep?'active':''}`}></div>)}</div>
          </div>
        ))}
          
      </div>
      <button onClick={handleclick} disabled={currentstep===steps.length-1}>Next</button>
    </div>
  );
}

export default App;
