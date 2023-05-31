import React  from "react";
import styles from './SubmitButton.module.css'

function SubmitButton({title}){
    return (
        
            <button type="submit">
                {title}
            </button>
        
    )
}
export default SubmitButton