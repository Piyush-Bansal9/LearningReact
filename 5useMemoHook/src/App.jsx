import { useState } from "react"


function App() {
  const [input, setInput]= useState(1);
  const [count, setcount]=useState(0);
  let sum=0;
  for(let i=1; i<=input; i++){
    sum+=i;
  }
  return <>
    <input type="number" value={input} placeholder="Enter a number" onChange={function(e){
      setInput(e.target.value)
    }}/>
    <div>
      Sum is {sum}
    </div>
    <button onClick={function(){
      setcount(count+1);
    }}>Counter {count}</button>
  </>
}
export default App
