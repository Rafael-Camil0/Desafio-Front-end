import {Container,Form} from './styles'
import{ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Tags } from '../../components/Tags'
import{Header} from '../../components/Header'

export function New(){
    return(
        <Container>
        <Header />
        
        <ButtonText text={"Voltar"}/>
        <Form >
        <label>Novo filme</label>
            <div>
            <Input placeholder = "Título" />
            <Input type = 'number' placeholder = "Sua nota (de 0 a 5)" />
            </div>
            <textarea name="" id="" placeholder='Observações'></textarea>
            <div className="marcadores">
                <Tags text={"Terror"}/>
                <Tags isNew={true}/>
            </div>
            <div className="buttons">
                <Button textButton={"Excluir filme"} isBlack={true}/>
                <Button type ='submit' textButton={"Salvar novo filme"}/>
            </div>

        </Form>
        
        
        </Container>

    )
}