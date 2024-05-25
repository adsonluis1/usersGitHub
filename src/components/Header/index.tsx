import SearchBar from '../SerchBar'
import * as S from './styled'


const Header = () => {
  return (
    <S.header>
        <S.h1>Users<span>GitHub</span></S.h1>
        <SearchBar />          
    </S.header>
  )
}

export default Header