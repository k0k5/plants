import styles from './manage.module.css'
import { Plants} from './inf.tsx';
import {useNavigate} from "react-router-dom";


export const ManagePage =()=>{
    return(
    <>
        <Plants></Plants>
        <ManageWin></ManageWin>
    </>
    )
}

const ManageWin =()=>{
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
                <div className={styles.otherinf}>Авто. полив: раз в 2 дня</div>
                <button className={styles.setBut}>Настроить авто. полив</button>
                <div className={styles.waterBut}><button className={styles.wateringNow}>Полить сейчас</button></div>
            </div>
        </div>
         </div>
    )
    
}