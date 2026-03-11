import { useState } from 'react'

import './App.css'

const Zones = () =>{
  return(
    <>
      <div className="allZone">
        
        <div className="allCont">
        <div className="conteiners"></div>
        <div className="conteiners"></div>
        <div className="conteiners"></div>
        <div className="conteiners"></div>
        <div className="conteiners"></div>
        <div className="conteiners"></div>
        </div>
      
        
       <div className="activationBut">
        <button className="on actBut"><p className='butText'>ВКЛ.</p></button>
        <button className="off actBut"><p className='butText'>ВЫКЛ.</p></button>
       </div>

      
      </div>        

    </>
  )
}

const Nav = () =>{
  return(
    <>
      <div className="nav">
        <button className="navButton"><p className="navText">Информация</p></button>
        <button className="navButton"><p className="navText">Управление</p></button>
        <button className="navButton"><p className="navText">Журнал</p></button>
      </div>

    </>
      
  )
}

const StarWin = () =>{
  return(
    <>
      <div className="startWin">
        <Zones></Zones>
        <Nav></Nav>
      </div>
        
    </>
    
  )
}
function App() {
return(
  <StarWin></StarWin>
)
 

}

export default App
