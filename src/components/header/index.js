import React, {useContext} from "react";
import Link from '../links'
import styles from './index.module.css'
import logo from '../../images/white-origami-bird.png'
import UserContext from "../../Context";


function Header(){

    const context = useContext(UserContext)

    

    return (
        <header>
            <nav className={styles.navig}>
                <img alt="logo" className={styles.logo} src={logo} />
                <Link title='Home' href='/' type='header' />
                {context.loggedIn ? <Link title='Share thoughts' href='/share/thoughts' type='header' /> : ''}
                {context.loggedIn ? <Link title='Profile' href='/profile' type='header' /> : ''}
                
                {!context.loggedIn ?  <Link title='Login' href='/login' type='header' /> : ''}
                {!context.loggedIn ? <Link title='Register' href='/register' type='header' /> : ''}
            </nav>
            
        </header>
    )
}

export default Header

