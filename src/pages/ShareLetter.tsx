import styled from 'styled-components'
import Card from '../components/card/Card';
import ShareKakao from '../components/share-letter/ShareKakao';
import ShareURL from '../components/share-letter/ShareURL';
import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

// interface ShareLetterProps {
//     img: number;
// }

const ShareLetter = () => {

  const [message, setMessage] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const onClickMoreLetterButton = () => {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <ShareLetterStyle>
      <div className={`copy-message ${message ? 'visible' : ''}`}>
        <p>URL이 복사되었습니다! ✨</p>
      </div>
      <Card img={3} />
      <div className='message'>
        <p>
          편지 작성 완료! 💌<br/>
          이제 마음을 전달해보세요
        </p>
      </div>
      <div className='share-button'>
        <ShareKakao />
        <ShareURL handleCopyClipBoard={handleCopyClipBoard} />
      </div>
      <div className='more-letter-button'>
        <button onClick={onClickMoreLetterButton}>다른 카드 쓰러가기 <GoArrowRight /></button>
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

  .more-letter-button {
    display: flex;
    justify-content: end;
    padding: 15px 40px 0 0;

    button {
      border: none;
      border-bottom: solid 1px;
      background: white;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }
  }

    
`;

export default ShareLetter
