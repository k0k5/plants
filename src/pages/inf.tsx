import {useNavigate} from "react-router-dom";
import styles from './inf.module.css'
import { createContext, useContext, useState } from 'react'

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
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)

    const open = () =>{
        setIsOpen(true)
    }

    const close = () =>{
        setIsOpen(false)
    }

    const create = () => {
        setIsOpen(false)
    }
    
    let moduleWin = null;

    if(isOpen){
        moduleWin = (
            <div className={styles.mainMW}>
                <div className={styles.createWin}>
                    <div className={styles.content}>
                        <div className={styles.cont1}>

                            <div className={styles.textCont}>
                                <div>Название: </div>
                                <div>Тип: </div>
                                <div>Авто полив: раз в </div>
                            </div>
                            <div className={styles.buttons}>
                                <button className={`${styles.but} ${styles.closeWin}`} onClick={close}>Отменить</button>
                                <button className={`${styles.but} ${styles.createPlante}`} onClick={create}>Создать</button>
                            </div>
                            
                        </div>
                        <div className={styles.cont2}>
                            <button className={styles.addPic}>
                                <img className={styles.addImg} src="./src/assets/Plus circle.svg" alt="" />
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>    
                
        )
    }
    return(
    <>
   {moduleWin}
    <div className={styles.infContainers}>
      <div className={styles.manage}>
          <button className={`${styles.active} ${styles.manageButton}`}  onClick={()=>{navigate('/info')}}>Инфо.</button>
          <button className={styles.manageButton} onClick={()=>{navigate('/manage')}}>Управление</button>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.cells}>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>
        </div>        
        <button className={styles.addPlant} onClick={open}><img src="./src/assets/+.svg" alt="" /></button>
        </div>
        
    </div>
     
        
    </>
    )
}

export const PlantInf =() =>{
    const navigate = useNavigate();

    return(
        <div className={styles.information}>
        <div className={styles.backZone}>        
            <button className={styles.back} onClick={()=>{navigate('/main')}}><img src="./src/assets/Arrow left.svg" alt="" /></button>
        </div>    
        <div className={styles.plantCard}>
            <img src="" alt="" className={styles.PlantImg} />
            <div className={styles.genInf}>
                <div className={styles.plantName}>Куст №1</div>
                <div className={styles.otherinf}>Датчики: вкл.</div>
                <div className={styles.otherinf}>Тип растения: Средний комнатный цветок</div>
                <div className={styles.otherinf}>Влажность почвы: x%</div>
                <div className={styles.otherinf}>Температура воздуха: x°C </div>
                <div className={styles.otherinf}>Время авто. полива: раз в 2 дня </div>
            </div>
        </div>
    </div>

    )
    }
