import styled from 'styled-components'
import Card from '../components/card/Card';
import ShareKakao from '../components/share-letter/ShareKakao';
import ShareURL from '../components/share-letter/ShareURL';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShareLetter = () => {

  const [message, setMessage] = useState<boolean>(false);
  const location = useLocation();
  const {image , response} = location.state || {};
  console.log('img', image)
  console.log(response)
  console.log(response.url)

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage(true);

      setTimeout(() => {
        setMessage(false);
      }, 3000);
    } 
    catch (error) {
      alert('복사 실패!');
    }
  }
  
  return (
    <ShareLetterStyle>
      <div className={`copy-message ${message ? 'visible' : ''}`}>
        <p>URL이 복사되었습니다! ✨</p>
      </div>
      <Card image={image} />
      <div className='message'>
        <p>
          편지 작성 완료! 💌<br/>
          이제 마음을 전달해보세요
        </p>
      </div>
      <div className='share-button'>
        <ShareKakao url={response?.url || ""} imagePath={image} />
        <ShareURL handleCopyClipBoard={handleCopyClipBoard} url={response.url} />
      </div>
    </ShareLetterStyle>
  )
}

const ShareLetterStyle = styled.div`
  .copy-message {
    display: flex;
    justify-content: center;
    margin: 50px 0 10px 0;
    height: 40px;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
    
    p {
      display: flex;
      justify-content: center;
      padding: 8px 15px;
      border-radius: 8px;
      background-color: gray;
      opacity: 0.8;
    }
  }

  .message {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
  .share-button {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

    
`;

export default ShareLetter
