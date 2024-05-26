import * as S from './styled'

interface Ibutton {
  value:string
  dark:boolean
  func:(url?:string)=>void
}

const Button = ({value,func, dark=false }:Ibutton) => {
  return (
    <S.button onClick={()=>{func()}} $dark={dark}>{value}</S.button>
  )
}

export default Button