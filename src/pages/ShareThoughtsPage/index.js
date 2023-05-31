import React, {useState, useEffect} from "react";
import PageWrapper from "../../components/pageWrapper";
import Post from "../../components/post";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/title/title";
import styles from './index.module.css'
import Posts from "../../components/posts/posts";

function ShareThoughtsPage() {

    
    const [newPost, setNewPost] = useState('')
    const [flag, setFlag]  = useState(false)
    
    
    
    async function createNewPost(){
        if (newPost =='') {
            return
        }
        
        const author = sessionStorage.getItem('email')
        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({ author, content: newPost})
        })
        if(response.ok){
            
            setNewPost('')
            setFlag(!flag)
        }else{
            const error = await response.json()
            alert(error)
            
        }

    }

    useEffect(()=>{

    }, [flag])
    

    return (
        <PageWrapper>
            <Title title='Share your thoughts' />
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea} value={newPost} onChange={e =>setNewPost(e.target.value)}>
                    </textarea>
                </div>
                <div className={styles.button}>
                    <button onClick={ createNewPost}>Share</button>
                </div>



            </div>

            <Posts flag={flag}/>

        </PageWrapper>
    )
}

export default ShareThoughtsPage