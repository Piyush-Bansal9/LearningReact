/*import { useState } from "react"
function App() {
  const [name, setName]= useState("hii")
  function Changename(){
    setName(Math.random());
  }
  return <>
    <button onClick={Changename}>Change the name of first title</button> 
    <Header name={name}></Header>
    <Header name="heythere"></Header>
  </>
}
function Header({name}){
  return <div>
    My name is {name} 
  </div>
}
export default App*/
// in the above code, only the first header needs to be re-rendered when the state changes, 
// but the entire App component gets re-rendered because the state variable lies in the App component.

// Make the following changes to above code.

/*import { useState } from "react"
function App() {
  function Changename(){
    setName(Math.random());
  }
  return <>
    <HeaderChangeAble/>
    <Header name="hey"></Header>
  </>
}
function HeaderChangeAble(){
  const [name, setName]=useState("hii")
  function buttoni(){
    setName(Math.random())
  }
  return <>
    <button onClick={buttoni}>Change name</button>
    <div>My name is {name}</div>
  </>
}
function Header({name}){
  return <div>
    My name is {name}
  </div>
}
export default App*/


// OR use React.memo
import React from "react";
import { useState } from "react"
function App() {
  const [name, setName]= useState("hii")
  function Changename(){
    setName(Math.random());
  }
  return (<div>
    <button onClick={Changename}>Change the name of first title</button> 
    <Header name={name}></Header>
    <Header name="heythere"></Header>
    <Header name="heythere"></Header><Header name="heythere"></Header>
    <Header name="heythere"></Header>
  </div>)
}
const Header= React.memo(function Header({name}){
  return <div>
    My name is {name}
  </div>
})
export default App

