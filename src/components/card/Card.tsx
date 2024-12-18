import styled from 'styled-components'

interface CardProps {
  image: { src: string; alt: string };
}

const Card = ({ image }: CardProps) => {

  return (
    <CardStyle>
      <img src={image.src} alt={image.alt} />
    </CardStyle>
  )
}

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  img {
    width: 90%;
    height : auto;
    border : none;
    border-radius: 8px;
    box-shadow: 5px 5px 3px #666;
    cursor: pointer;
  }
`;

export default Card
