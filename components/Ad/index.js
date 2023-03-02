import styles from './Ad.module.css'
import { useState } from 'react'
export default function Ad() {

    const [popup, setPopup] = useState(true); 

    return(
        <>
        {
            popup ?
            <div>
                <div className={styles.container}>
                    <div className={styles.popup__area}>
                        <div onClick={()=> setPopup(false)}></div>
                        <h1>Welcome</h1>                        
                    </div>
                </div>
            </div>
            :<></>
        }
        </>
    )
}