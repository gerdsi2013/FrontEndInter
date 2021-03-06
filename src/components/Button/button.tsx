
import { ButtonHTMLAttributes} from "react"
import { ButtonContainer } from "./style"


export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>){
    return(

        <ButtonContainer {...props}>
                 {props.children}
        </ButtonContainer>
    )
}