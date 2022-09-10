import * as S from './StylesTopHeader'

const TopHeader = ({title = "Canada Lists"}) => {
  //TODO: change <S.Header>{title}</S.Header> to the logo
  return (
    <S.Wrapper>
      <S.Header>{title}</S.Header>
    </S.Wrapper>
  )
}

export default TopHeader
