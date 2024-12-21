

/*function App() {
  return <>
    <CreateWrapper innerComponent={<TextComponent1/>}/>
    <CreateWrapper innerComponent={<TextComponent2/>}/>
  </>
}
function TextComponent1(){
  return <div>
    hi  
  </div>
}
function TextComponent2() {
  return <div>
    hey
  </div>
}
function CreateWrapper({innerComponent}) {
  return <div style={{border: "2px solid black", padding: 20}}>
    {innerComponent}
  </div>
}
export default App*/

// OR-->
import React from "react"
function App() {
  return <>
    <CreateWrapper>
      <TextComponent1/>
    </CreateWrapper>
    <CreateWrapper>
      <TextComponent2/>
    </CreateWrapper>
  </>
}
function TextComponent1(){
  return <div>
    hi  
  </div>
}
function TextComponent2() {
  return <div>
    hey
  </div>
}
function CreateWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}
export default App
