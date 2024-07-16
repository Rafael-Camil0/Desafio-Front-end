import {Container} from './styles'
import { LiaPlusSolid,LiaTimesSolid } from "react-icons/lia";
export function Tags({isNew,text,onClick,...rest}){
    return (
        <Container $isnew = {isNew}>
          <input type="text" readOnly={!isNew} onClick={onClick} value={text} placeholder={isNew? "Novo marcador":""}  {...rest} />
          <button
          className={!isNew?"button-delete":"button-add"}
          >{!isNew?<LiaTimesSolid size={20}/>:<LiaPlusSolid size={20}/>}</button>
        </Container>
    )
}