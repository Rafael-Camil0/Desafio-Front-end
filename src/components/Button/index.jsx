import {Container} from './styles.js'

export function Button({isBlack  ,textButton,...rest}){

    return(
        <Container
        type='button'
        $isblack={isBlack}
        {...rest}
        >
            Texto
            {textButton}
        </Container>
    )
    
}