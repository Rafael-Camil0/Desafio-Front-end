import {Container,User} from './styles'
import {Input} from '../Input'

export function Header(){
    return(

    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder = "Pesquisar pelo título"/>
        <User>
        <div>
            <p>Rodrigo Gonçalves</p>
            <span>sair</span>
        </div>
        <img src="https://github.com/rafael-co.png" alt="Foto de perfil" 
        />
        
        </User>
    </Container>
    )
}