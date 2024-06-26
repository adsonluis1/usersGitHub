import { useEffect, useState } from 'react'
import * as S from './styled'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { useFeatch } from '../../context/ValueFetch'


interface Iuser {
    login:string
    id:number
    node_id:string
    avatar_url:string
    gravatar_id:string
    url:string
    html_url:string
    followers_url:string
    following_url:string
    gists_url:string
    starred_url:string
    subscriptions_url:string
    organizations_url:string
    repos_url:string
    events_url:string
    received_events_url:string
    type:string
    site_admin:boolean
}

const CardPerfils = () => {
    const [users, setUsers] = useState<Iuser[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()
    const {setFeatch} = useFeatch()

    useEffect(()=>{
        const getPerfils = async ()=>{
            try {
                const res = await fetch('https://api.github.com/users')
                const data = await res.json()
                setUsers(data)
            } catch (error:any) {
                console.log(error.massage)
                setError('Houver algum error :(')
            }
        }
        
        getPerfils()
              
    },[])
    
   

    return (
    <>
        {error && 
        <S.divError>
            <S.headererror>{error}</S.headererror>
            <Button func={()=>{
                navigate('/')
            }} dark={true} value='Voltar'/>
        </S.divError>
        }
        {users && users.length >= 1 ? 
            users.map((user:Iuser)=>[
                <S.div key={user.id}>
                    <S.img src={user.avatar_url}/>
                    <S.h3>{user.login}</S.h3>
                    <Button dark={false}  func={()=> {
                        navigate(`/fetch/${user.login}`)
                        setFeatch(user.login)
                    }} value='Ir para o Perfil'/>
                </S.div>
            ])
            :
            <S.divError>
                <S.headererror>Algo deu errado</S.headererror>
            </S.divError>
        }
    </>
  )
}

export default CardPerfils