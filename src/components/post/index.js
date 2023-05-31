import React from "react";
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird.png'

function Post({content, author}) {
    
    return (
        <div className={styles.container}>
            <div className={styles.post}>
            <img className={styles.img} src={logo} alt="Origami" />
            <p className={styles.text}>
                {content}
            </p>
            </div>
            <div className={styles.author}>
                <span >
                    <small>Author:</small>
                    {author}
                </span>

            </div>
        </div>
    )
}

export default Post