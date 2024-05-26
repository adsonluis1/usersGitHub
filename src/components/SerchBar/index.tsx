import { useState } from 'react'
import { useFeatch } from '../../context/ValueFetch'
import Button from '../Button'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [user, setUser] = useState<string>('')
  const {setFeatch} = useFeatch()
  const navigate = useNavigate()  
  
  return (
    <S.div>
      <input 
      type='search' 
      value={user} 
      placeholder='Digite um nome de usuario'
      onChange={(e)=>{setUser(e.target.value)}}
      />
      <Button func={()=>{
        setFeatch(user)
        navigate('/')
        }} dark={false} value='Buscar'/>
    </S.div>
  )
}

export default SearchBar