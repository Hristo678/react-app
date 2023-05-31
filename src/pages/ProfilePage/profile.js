import React, {useContext} from "react";
import PageWrapper from "../../components/pageWrapper";
import Post from "../../components/post";
import Title from "../../components/title/title";
import UserContext from "../../Context";
import profileImg from '../../images/blank-profile-picture-973460_1280.png'
import styles from './profile.module.css'
import {useNavigate} from 'react-router-dom'
import Posts from "../../components/posts/posts";

 const ProfilePage = () => {

    const context = useContext(UserContext)
    const navigate = useNavigate()


    const logout = () =>{
        context.logOut()
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('password')
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        navigate('/', {replace: true})

    }
        return (
            <PageWrapper>
                <Title title='Profile' />
                <div className={styles.container}>
                    <img className={styles.img} src={profileImg} />
                    <p>
                    <span>Username: </span>
                        Gosho
                    </p>
                    <p>
                    <span>Email: </span>
                        Gosho@abv.bg
                    </p>
                    <p>
                        <button className={styles.logoutBtn} onClick={logout}>Logout</button>
                    <span>Posts: </span>
                        3
                    </p>
                    <h3>3 of your recent posts:</h3>
                </div>
                <div>
                    
                <Posts author = 'Spami' />
                    
                </div>

            </PageWrapper>
        )
    
}

export default ProfilePage