import styled from 'styled-components'

interface CardProps {
  img: number;
}

const Card = ({ img }: CardProps) => {

  const imgUrl = `/images/christmas${img}.png`;

  return (
    <CardStyle>
      <img src={imgUrl} alt='편지카드' />
    </CardStyle>
  )
}

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  img {
    border-radius: 10px;
    box-shadow: 5px 5px 3px #666;
    cursor: pointer;
  }
`;

export default Card
