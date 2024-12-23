import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Users from "./components/Users"
import Apps from "./components/Apps"
import Primary from "./components/Primary"

// Refer to readme file
import { Link, useNavigate } from 'react-router-dom'
//useNavigate hook in Apps component

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>                       // Creating layouts so that every window has a similar look.
            <Route path='/' element={<Primary/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/apps' element={<Apps/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return <div style={{height: "100vh"}}>
  <div id="header">
      <Link to='/'>Primary | </Link> 
        <Link to='/users'>Users | </Link> 
        <Link to='/apps'>Apps | </Link> 
  </div>
  <div style={{height: "90vh"}}>
  <Outlet/>
  </div>
  <div>Footer</div>
  </div>
}



export default App
