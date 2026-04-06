import { useState } from 'react'
import styles from './App.module.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";

import { InfoPage } from './pages/inf'
import { ManagePage } from './pages/manage';
import { ReportPage } from './pages/reports'


function App() {
return(
    <BrowserRouter>
        <Routes>
            <Route path='/main' element={<StartWin/>}/>
            <Route path='/info' element={<InfoPage/>}/>
            <Route path='/manage' element={<ManagePage/>}/>
            <Route path='/report' element={<ReportPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

const Zones = () =>{
  return(
    <>
    <div className={styles.all}>
      <div className={styles.allZone}>
        
        <div className={styles.allCont}>
        <div className={styles.conteiners}></div>
        <div className={styles.conteiners}></div>
        <div className={styles.conteiners}></div>
        <div className={styles.conteiners}></div>
        <div className={styles.conteiners}></div>
        <div className={styles.conteiners}></div>
        </div>
      
        
       <div className={styles.activationBut}>
        <button className={`${styles.on} ${styles.actBut}`}><p className={styles.butText}>ВКЛ.</p></button>
        <button className={`${styles.off} ${styles.actBut}`}><p className={styles.butText}>ВЫКЛ.</p></button>
       </div>

      
      </div>     
    </div>
         

    </>
  )
}

const Nav = () =>{
     const navigate = useNavigate();

  return(
    <>
      <div className={styles.nav}>
        <button className={styles.navButton} onClick={()=>{navigate('/info')}}><p className={styles.navText}>Информация</p></button>
        <button className={styles.navButton} onClick={()=>{navigate('/manage')}}><p className={styles.navText}>Управление</p></button>
        <button className={styles.navButton} onClick={()=>{navigate('/report')}}><p className={styles.navText}>Журнал</p></button>
      </div>

    </>
      
  )
}

export const StartWin = () =>{
  return(
    <>
      <div className={styles.startWin}>
        <Zones></Zones>
        <Nav></Nav>
      </div>
        
    </>
    
  )
}


export default App
