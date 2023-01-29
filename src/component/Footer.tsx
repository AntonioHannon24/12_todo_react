
import React from 'react';
import styles from "./Footer.module.css"

interface Props{

}

const Footer =()=>{
    
    return(
     
        <footer className={styles.footer}>
            <p>
                <span>React + TS to do</span>@2021
            </p>
        </footer>
    
    )
}

export default Footer