import {Container} from './styles'
import { LiaArrowLeftSolid } from "react-icons/lia";


export function ButtonText({text, Icon,...rest}){
        return(
            <Container
            {...rest}
            >
                {Icon?<LiaArrowLeftSolid/>:" "}
                {text}
            </Container>
        )
    
}