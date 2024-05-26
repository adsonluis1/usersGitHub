import CardPerfils from '../CardPerfils'
import Header from '../Header'
import * as S from './styled'

const Home = () => {
  return (
    <>
      <Header />
      <S.main>
          <S.section>
            <CardPerfils />
          </S.section>
      </S.main>
    </>
  )
}

export default Home