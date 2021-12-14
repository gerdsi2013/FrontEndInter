import {InputHTMLAttributes} from "react"

import { InputContainer } from "./style"


export function Input(props: InputHTMLAttributes<HTMLInputElement>){
    return(

        <InputContainer>
        <input {...props} />
        </InputContainer>
    )
}