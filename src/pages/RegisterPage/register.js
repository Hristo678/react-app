import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/title/title";
import UserContext from "../../Context";
import styles from './register.module.css'

function LoginPage() {

    const nav = useNavigate()
    const contextType = useContext(UserContext)
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [rePassword, setRePassword] = useState('') 
    const [error, setError] = useState(false) 

const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email, password})
        })
        if (response.ok) {
            document.cookie = 'x-auth-token=1232'
            contextType.logIn({email, password})
            nav("/", { replace: true }) 
        }else{
            setError(true)
        }
        

    }catch(e){
        console.log(e);
        return new Error(e)
    }
    
}

    return (
        <PageWrapper>
            <Title title='Register' />
            <div className={styles.registerForm}>
                <form onSubmit={handleSubmit}>
                    <Input value={email} onChange={e => setEmail(e.target.value)} label='Username' id='username' />
                    <Input value={password} onChange={e => setPassword(e.target.value)} label='Password' id='password' />
                    <Input value={rePassword} onChange={e => setRePassword(e.target.value)} label='Repeat pasword' id='rePassword' />
                    <div className={styles.button}>
                        <SubmitButton title='Register' />
                    </div>
                    {error ? <p>Wrong username or password!</p> : ''}

                </form>
            </div>

        </PageWrapper>
    )
}

export default LoginPage