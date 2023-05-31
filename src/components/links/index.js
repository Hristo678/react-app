import React from "react";
import {Link} from 'react-router-dom'
import styles from './index.module.css'

function LinkComponent({title, href, type}){
    return(
        <div className={styles[`nav-item-${type}`]}>
            <Link to={href} className={styles[`nav-a-${type}`]}>
                {title}
            </Link>
        </div>
    )
}

export default LinkComponent