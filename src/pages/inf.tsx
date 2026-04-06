import {useNavigate} from "react-router-dom";
import styles from './inf.module.css'


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

    return(
    <>
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
        <button className={styles.addPlant}><img src="./src/assets/+.svg" alt="" /></button>
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
