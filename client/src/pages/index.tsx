import TopHeader from 'components/TopHeader'
import Head from 'next/head'
import Image from 'next/image'

import * as S from './styles'

const Home = ({title = "Canada Lists"}) => {
  //TODO: change <S.Header>{title}</S.Header> to the logo
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <S.Container>
        <Image src="/img/canada_bg.jpg" alt="Canada flag background" layout='fill'/>
        <TopHeader/>
      </S.Container>
    </>
  )
}

export default Home
