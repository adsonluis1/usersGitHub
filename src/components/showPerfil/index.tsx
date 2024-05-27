import { useEffect, useState } from "react"
import * as S from './styled'
import ShowRepos from "../showRepos"
import Header from "../Header"
import { useParams } from "react-router-dom"

interface Iuser {
  login:string
  id:number
  avatar_url:string
  html_url:string
  repos_url:string
  name:string | null
  company:string | null
  location:string | null
  email:string | null
  bio:string | null
  public_repos:number
  public_gists:number
  followers:number
  following:number
}


const ShowPerfil = () => {
    const {query} = useParams()
    const [user, setUser] = useState<Iuser | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=>{
        setError(null)
        const getPerfil= async ()=>{
            try {
                const res = await fetch(`https://api.github.com/users/${query}`)
                const dados = await res.json()
                if(res.status != 200){
                  setError(dados)
                }
                else if(res.status == 200){
                  setUser(dados)
                }
            } catch (error) {
                if(typeof error === 'string'){
                  setError(error.toUpperCase())
                }else if(error instanceof Error){
                  setError(error.message)
                }
                
            }
        }
         getPerfil()
    },[query])
    console.log(query)
    return (
      <>
      <Header />
      {user && !error && 
        <S.section>
          <S.UserInfoDiv>
            <S.img src={user.avatar_url}/>
            {user.name != null && <S.h1>{user.name}</S.h1>}
            <S.h2 title="Nome de Usuario">{user.login}</S.h2>
            <S.p>{user.followers} <span>Follower</span> <span>|</span> {user.following} <span>Following</span></S.p>
            {user.location != null && <S.p>{user.location}</S.p>}
            {user.bio != null && <S.p>{user.bio}</S.p>}
          </S.UserInfoDiv>
          {query && <ShowRepos featch={query}/>} 
        </S.section>
      }
      {!user && !error && 
      <S.section>
        <S.h1>Nenhum usuario encontrado</S.h1>
      </S.section>
      }
      {error && 
      <S.section>
        <S.h1>{error.message}</S.h1>
      </S.section>
      }

      </>
  )
}

export default ShowPerfil