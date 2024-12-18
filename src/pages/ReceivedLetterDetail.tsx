import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ReceivedLetterDetail = () => {

  const navigate = useNavigate();

  const handleReply = () => {
    navigate('/letters/write');
  }

  return (
    <>
      <h1>ReceivedLetterDetail</h1>
      <ReceivedLetterDetailStyle>
        <div>
          <div className='letter'>
            불러온내용
          </div>
          <div>
            <div className='response-title'>하트를 클릭해서 마음을 전달해주세요</div>
            <div className='response-button'>
              <button>🩷<div>감동이에요</div></button>
              <button>💛<div>너무 고마워요</div></button>
              <button>💚<div>우정뽀레버</div></button>
            </div>
          </div>
          <div className='reply-button'>
            <button onClick={handleReply}>답장하러 가기</button>
          </div>
        </div>
      </ReceivedLetterDetailStyle>
    </>
  )
}

const ReceivedLetterDetailStyle = styled.div`
  display: flex;
  justify-content: center;
  
  .letter {
    width: 350px;
    height: 350px;
    background: #D9D9D9;
    border-radius: 8px;
    padding: 20px;
  }
  
  .response-title {
    font-size: 12px;
    padding: 10px 0;
  }

  .response-button {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    
    button {
      border: none;
      background: white;
      font-size: 20px;

      div {
        font-size: 12px;
      }
    }
  }

  .reply-button {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0px;
    
    button {
      right: 0;
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
    }
  }
`;

export default ReceivedLetterDetail
