import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, React, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Illustration
      src="img/react-animation.gif"
      alt="Image ReactJS animated"
    ></S.Illustration>

    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
