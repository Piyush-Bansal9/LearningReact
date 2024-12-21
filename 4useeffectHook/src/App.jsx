import React from "react";
import { useEffect } from "react"
function App() {
  useEffect(function(){
    console.log("hii")
    alert("hii")
  }, [])
  return (
    <div>
      hi 
    </div>
  )
}

export default App
