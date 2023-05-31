import styles from './index.module.css'
import React, { useEffect, useState } from "react";
import PageWrapper from '../../components/pageWrapper'
import Post from '../../components/post'
import Title from '../../components/title/title.js'
import { useNavigate } from 'react-router-dom'
import Posts from '../../components/posts/posts';


const Home = () => {
    
    return (
        <div className={styles.app}>
            <PageWrapper>
                <Title title='HomePage' />
                <Posts />

            </PageWrapper>
        </div>
    )
}

export default Home;