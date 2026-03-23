import { useState } from 'react'

import './App.css'


export const InfoPage =() =>{
    return(
        <Main></Main>
    )
}

const Main =()=>{
    return(
    <>
    <Plants></Plants>
    <PlantInf></PlantInf>
    </>
    )
}

export const Plants =() =>{
    return(
    <>
    <div className="infContainers">
      <div className="manage">
          <button className="active manageButton">Инфо.</button>
          <button className="manageButton">Управление</button>
        </div>
        <div className="mainBlock">
          <div className="cells">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
        </div>
        </div>
        
        <button className="addPlant"></button>
    </div>
        
    </>
    )
}

export const PlantInf =() =>{
    return(
        <div className="information">
        <button className="back"></button>
        <div className="plantCard">
            <img src="" alt="" className="PlantImg" />
            <div className="genInf">
                <div className="plantName">Куст №1</div>
                <div className="otherinf">Датчики: вкл.</div>
                <div className="otherinf">Тип растения: Средний комнатный цветок</div>
                <div className="otherinf">Влажность почвы: x%</div>
                <div className="otherinf">Температура воздуха: x°C </div>
                <div className="otherinf">Время авто. полива: раз в 2 дня </div>
            </div>
        </div>
    </div>

    )
    }

// const Zones = () =>{
//   return(
//     <>
//     <div className="all">
//       <div className="allZone">
        
//         <div className="allCont">
//         <div className="conteiners"></div>
//         <div className="conteiners"></div>
//         <div className="conteiners"></div>
//         <div className="conteiners"></div>
//         <div className="conteiners"></div>
//         <div className="conteiners"></div>
//         </div>
      
        
//        <div className="activationBut">
//         <button className="on actBut"><p className='butText'>ВКЛ.</p></button>
//         <button className="off actBut"><p className='butText'>ВЫКЛ.</p></button>
//        </div>

      
//       </div>     
//     </div>
         

//     </>
//   )
// }

// const Nav = () =>{
//   return(
//     <>
//       <div className="nav">
//         <button className="navButton"><p className="navText">Информация</p></button>
//         <button className="navButton"><p className="navText">Управление</p></button>
//         <button className="navButton"><p className="navText">Журнал</p></button>
//       </div>

//     </>
      
//   )
// }

// const StarWin = () =>{
//   return(
//     <>
//       <div className="startWin">
//         <Zones></Zones>
//         <Nav></Nav>
//       </div>
        
//     </>
    
//   )
// }

function App() {
return(
  <InfoPage></InfoPage>
)
 

}

export default App
