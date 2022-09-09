import Head from 'next/head'
import Image from 'next/image'

import * as S from './styles'

const Home = ({title = "Canada Lists"}) => {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <S.Container>
        <Image src="/img/canada_bg.jpg" alt="Canada flag background" layout='fill'/>
        <S.Wrapper>
          <S.Header>{title}</S.Header>
        </S.Wrapper>
      </S.Container>
    </>
  )
}

export default Home
