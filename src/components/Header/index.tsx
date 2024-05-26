import { useNavigate } from 'react-router-dom'
import SearchBar from '../SerchBar'
import * as S from './styled'


const Header = () => {
  const navigate = useNavigate()
  return (
    <S.header>
        <S.h1 onClick={()=>{navigate('/')}}>Users<span>GitHub</span></S.h1>
        <SearchBar />          
    </S.header>
  )
}

export default Header