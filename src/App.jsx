
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [Principle,setPrinciple]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [interest,setInterest]=useState(0)
  const [isPrinciple,setisPrinciple]=useState(true)
  const [isRate,setisRate]=useState(true)
  const [isYear,setisYear]=useState(true)

  const Validate=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);

    console.log(e.target.value.match('^[0-9]*$'));

    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(true)

      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(true)
      }
      else{
        setYear(e.target.value)
        setisYear(true)
      }
    }
    else{
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setisPrinciple(false)

      }
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setisRate(false)
      }
      else{
        setYear(e.target.value)
        setisYear(false)
      }
    }
    
    
  }

  const handleReset =()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setisPrinciple(true)
    setisRate(true)
    setisYear(true)
    setInterest(0)
  }
  const handleCalculate=()=>{
    setInterest((Principle*rate*year)/100)
  }
  

  return (
    <>
 <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center '>
   <div style={{width:'500px'}} className='p-5 bg-light rounded'> 
    <h1>Simple interest App</h1>
    <p>calculate your simple interest easily</p>
    <div style={{height:'150px'}}className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
      <h1>₹{interest}</h1>
      <p>Total simple interest</p>
    </div>
  <div className="my-3">
  <TextField name='principle' value={Principle} id="outlined-basic" label="₹ Principle Amount" variant="outlined" className='w-100' onChange=
  {(e)=>{Validate(e)}} />
  {!isPrinciple&& <span className='text-danger'>*invalid input</span>}
  </div>
  <div className="mb-3">
  <TextField name='rate' value={rate}  id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>{Validate(e)}} />
  {!isRate&& <span className='text-danger'>*invalid input</span>}
  </div>
  <div className="mb-3">
  <TextField name='year' value={year}  id="outlined-basic" label="Year(yr)" variant="outlined" className='w-100' onChange={(e)=>{Validate(e)}} />
  {!isYear && <span className='text-danger'>*invalid input</span>}
  </div>
  <div className="mb-3 d-flex justify-content-between">
  <Button style={{width:'190px',height:'60px'}} onClick={handleCalculate} variant="contained" color="success" disabled={ isPrinciple && isRate && isYear ? false : true} >Calculate</Button>
  <Button onClick={handleReset} style={{width:'190px',height:'60px'}} variant="outlined" >Reset</Button>
  </div>
   </div>
    </div>
 
    </>
  )
}

export default App
