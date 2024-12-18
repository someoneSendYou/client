// import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Card from '../components/card/Card';

const ReceivedLetter = () => {

  return (
    <ReceivedLetterStyle>
      <div>
        <h2>Someone Send You</h2>
        <h3>Click 🔽</h3>
        <Card img={3} />
        {/* <div className='flip'>
          <div className='card'>
            <div className='front'>
              <Card img={3} />
            </div>
            <div className='back'>
            </div>
          </div>
        </div> */}

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
  h2, h3 {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
  .flip { 
    width: 200px;
    height: 250px;
    perspective: 1100px;
  }

  .card {
    width: 100%; 
    height: 100%; 
    position: relative;
    transition: .4s;
    transform-style: preserve-3d;
  }	

  .front, .back {
    position: absolute;
    width: 100%; 
    height: 100%;
    backface-visibility: hidden;
  }

  .front {
  }

  // 뒷면은 사전에 미리 뒤집기
  .back { 
    transform: rotateY(180deg);
  }

  // 호버 시 뒤집기
  .flip:hover .card {
    transform: rotateY(180deg);
  }
`;

export default ReceivedLetter
