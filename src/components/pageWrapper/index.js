import React from "react";
import styles from './index.module.css'
import Header from '../header'
import Side from '../side'
import Footer from '../footer'


function PageWrapper(props) {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Side />
                <div className={styles['inner-container']}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageWrapper