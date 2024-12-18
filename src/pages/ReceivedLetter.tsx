// import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Card from '../components/card/Card';

const ReceivedLetter = () => {

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const received = queryParams.get('received');

  return (
    <ReceivedLetterStyle>
      <div>
        <h3>Someone Send You</h3>
        <Card img={3} />
      </div>
    </ReceivedLetterStyle>
  )
}

const ReceivedLetterStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;

    h3 {
        display: flex;
        justify-content: center;
        padding: 30px 0 0 0;
    }
`;

export default ReceivedLetter
