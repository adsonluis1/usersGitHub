import Button from '../Button'
import * as S from './styled'

const SearchBar = () => {
    return (
    <S.div>
      <S.input type='search' placeholder='Digite um nome de usuario'/>
      <Button $dark={false} value='Buscar'/>
    </S.div>
  )
}

export default SearchBar