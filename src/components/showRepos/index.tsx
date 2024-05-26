import { useEffect, useState } from "react"
import * as S from './styled'

interface Irepo {
    id:number
    name:string
    full_name:string
    private:boolean
    html_url:string
    description:string | null
    language:string | null
    stargazers_count:number
  }

interface IshowRepos {
    featch:string
}

const ShowRepos = ({featch}:IshowRepos) => {
    const [repos,setRepos] = useState<Irepo[] | []>([])
    const [error, setError] = useState<string | null>(null)
    useEffect(()=>{
        const getRepo = async ()=>{
            try {
              const res = await fetch(`https://api.github.com/users/${featch}/repos`)
              const data = await res.json()
              data.sort((a:Irepo,b:Irepo) => b.stargazers_count - a.stargazers_count) 
              setRepos(data.slice(0,6))
            } catch (error) {
              if(typeof error === 'string'){
                setError(error.toUpperCase())
              }else if(error instanceof Error){
                setError(error.message)
              }
            }
          }

          getRepo()
        
    },[featch])
  return (
    <>
    {repos.length >= 1 && !error &&
        <>
        <S.section>
            
            {repos.map((repositorio:Irepo)=>[
                <S.div>
                    <S.divChild>
                        <S.a target="_blank" href={repositorio.html_url}>{repositorio.name}</S.a>
                        <S.p $borde={true} >{repositorio.private?'Private':'Public'}</S.p>
                    </S.divChild>
                    {repositorio.description != null && <S.p $borde={false}>{repositorio.description}</S.p>}
                    <S.p $borde={false}>Stars: {repositorio.stargazers_count}</S.p>
                    {repositorio.language != null && <S.p $borde={false}>{repositorio.language}</S.p>}
                </S.div>
            ])}
        </S.section>
        </>
    }
    </>
  )
}

export default ShowRepos