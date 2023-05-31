import React, {useContext, useState} from "react";
import Input from "../../components/input/input";
import PageWrapper from "../../components/pageWrapper";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/title/title";
import styles from './login.module.css'
import {useNavigate} from 'react-router-dom'
import UserContext from "../../Context";




 const LoginPage = () => {
   
    const navigate = useNavigate()
    const contextType = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    

   

   const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        try{
             const response = await fetch('http://localhost:3030/users/login', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({email, password})
            })
            if (response.ok) {
               contextType.logIn()
              
               
            document.cookie = 'x-auth-token=1232'
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('password', password)
            navigate("/", { replace: true })
            
            }else{
               
                setError(true)
            }
            
            
        }catch(e){
            console.log(e);
            
        }
    }

   

        return (
            <PageWrapper>
                <Title title='Login' />
                <div className={styles.loginForm}>
                    <form onSubmit={handleSubmit}>
                    <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    id="email"
                    />
                        <Input onChange={(event) => setPassword(event.target.value)} value={password} label='Password' id='password' />
                        <div className={styles.button}>
                            <SubmitButton title='Login'  />
                        </div>
                    {error ? <p>Wrong username or password!</p> : ''}
                    </form>
                </div>

            </PageWrapper>

        )
    
}

export default LoginPage