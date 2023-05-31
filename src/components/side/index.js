import React, {useContext} from "react";
import UserContext from "../../Context";
import Link from '../links';
import styles from './index.module.css'

function Side() {

const context = useContext(UserContext)

if(context.loggedIn){
    return(
        <aside className={styles.side}>
            <ul>
                <li>
                <Link title='Home' href='/' type='side' />
                </li>
                <li>
                <Link title='Share thoughts' href='/share/thoughts' type='side' />
                </li>
                <li>
                <Link title='Profile' href='/profile' type='side' />
                </li>
                <li>
                <Link title='Dev Page' href='/dev-page' type='side' />
                </li>
                
                
            </ul>
            
            
        </aside>
    )
}else{
    return (
        <aside className={styles.side}>
            <ul>
                <li>
                <Link title='Home' href='/' type='side' />
                </li>
                
                <li>
                <Link title='Login' href='/login' type='side' />
                </li>
                <li>
                <Link title='Register' href='/register' type='side' />
                </li>
                <li>
                <Link title='Dev Page' href='/dev-page' type='side' />
                </li>
                
            </ul>
            
            
        </aside>
    )
}

}

export default Side