import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ReceivedLetterDetail = () => {

  const [selectedResponse, setSelectedResponse] = useState<string>('');

  const navigate = useNavigate();

  const handleReply = () => {
    navigate('/');
  };

  const handleResponse = (response: string) => {
    sessionStorage.removeItem('kakao-template');
    sessionStorage.setItem('kakao-template', response);
    setSelectedResponse(response);
  };

  return (
    <>
      <ReceivedLetterDetailStyle>
        <div>
          <div className='letter'>
            불러온내용
          </div>
          <div>
            <div className='response-title'>하트를 클릭해서 마음을 전달해주세요</div>
            <div className='response-box'>
              <button className={selectedResponse === '1' ? 'button-clicked' : 'button-unclicked'} onClick={() => handleResponse('1')}>
                🩷
                <div>감동이에요</div>
              </button>
              <button className={selectedResponse === '2' ? 'button-clicked' : 'button-unclicked'} onClick={() => handleResponse('2')}>
                💛
                <div>너무 고마워요</div>
              </button>
              <button className={selectedResponse === '3' ? 'button-clicked' : 'button-unclicked'} onClick={() => handleResponse('3')}>
                💚
                <div>우정뽀레버</div>
              </button>
            </div>
          </div>
          <div className='reply-button'>
            <button disabled={selectedResponse ? false : true} onClick={handleReply}>답장하러 가기</button>
          </div>
        </div>
      </ReceivedLetterDetailStyle>
    </>
  )
}

interface ReceivedLetterDetailStyleProps {
  $selected?: boolean;
}

const ReceivedLetterDetailStyle = styled.div<ReceivedLetterDetailStyleProps>`
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

  .response-box {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;

    button {
      border: none;
      border-radius: 8px;
      padding: 5px;
      font-size: 20px;
      div {
        font-size: 12px;
      }
    }
  }

  .button-clicked {
    background: #E55858;
  }

  .button-unclicked {
    background: white;
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
