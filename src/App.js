import { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import "./qrcode.css"

function App() {
  const [input,setInput]=useState("")
  const [data,setData]=useState("")
function handleGenerate(){
  setData(input)
  setInput("")
}

  return (
    <div className="wrapper">
    <h1>QR Code Generator</h1>
    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter your Text...'/>
    <button disabled={input ===""?true:false} onClick={handleGenerate}>Generate</button>
<QRCode 
id='qr-code'
value={data}
size={100}
></QRCode>
<div className='prev-text'> Your Text Was : {data}</div>
    </div>
  );
}

export default App;
