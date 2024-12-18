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
    background: pink;
    border-radius: 8px;
    padding: 20px;
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
