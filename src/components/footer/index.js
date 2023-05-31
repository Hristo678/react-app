import React, { useContext } from "react";
import UserContext from "../../Context";
import Link from '../links'
import styles from './index.module.css'

function Footer() {

    const context = useContext(UserContext)

    if (context.loggedIn) {
        return (
            <footer className={styles.footer}>
                <Link title='Home' href='/' type='footer' />
                <Link title='Share thoughts' href='/share/thoughts' type='footer' />
                <Link title='Profile' href='/profile' type='footer' />

                <p className={styles.university}>Software University 2022</p>
            </footer>
        )
    } else {
        return (
            <footer className={styles.footer}>
                <Link title='Home' href='/' type='footer' />

                <Link title='Login' href='/login' type='footer' />
                <Link title='Register' href='/register' type='footer' />
                <p className={styles.university}>Software University 2022</p>
            </footer>
        )
    }


}

export default Footer