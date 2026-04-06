import styles from './reports.module.css'
import {useNavigate} from "react-router-dom";


export const ReportPage =()=>{
    const navigate = useNavigate();

    return(
    <>
    <div className={styles.win}>
        <div className={styles.header}>
            <div className={styles.title}><p className={styles.titleText}>Журнал</p></div>
            <div className={styles.backZone}>
                <button className={styles.back} onClick={()=>{navigate('/main')}}><img src="./src/assets/Arrow left.svg" alt="" /></button>
            </div>
        </div>

{/* {`${plant} полив в ${time}. Было израсходовано ${waterVolume}мл. воды`} */}

        <div className={styles.reportWin}>
            <div className={styles.textRW}>
                <div className={styles.waterReport}>
                   Куст №1 полив в 14:40. Было израсходовано 400мл. воды
                </div>


                <div className={styles.errorReport}><div className={styles.error}>ОШИБКА —  </div><div className={styles.errorExplain}> закончилась вода </div><div className={styles.time}>(14:41)</div></div>
            </div>
        </div>
    </div>
        
    </>
    )
}