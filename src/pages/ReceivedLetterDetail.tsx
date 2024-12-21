import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getLetter } from '../api/letter-api';
import { useEffect, useState } from 'react';
import Card from '../components/card/Card';

interface ResponseProps {
  message: string;
  letters:{
    id : number;
    hashId : string;
    comment : string;
    imgPath : string;
    title?: string;
    templete_id?: number;
    created_at?: string;
  }
}

const ReceivedLetterDetail = () => {
  const { id } = useParams<{id : string}>();
  const navigate = useNavigate();

  const [letterData, setLetterData] = useState<ResponseProps | undefined>(undefined);

  const handleReply = () => {
    navigate('/letters/write');
  }

  const handleHashUrl = async () => {
    if (!id) {
      console.log("유효하지 않은 메세지입니다");
      return;
    }
    try {
      const data = await getLetter(id);
      setLetterData(data);
    } catch (error) {
      console.log("error:",error)
    }
  };

  useEffect(()=>{
    handleHashUrl();
  },[])

  return (
    <>
      <h1>ReceivedLetterDetail</h1>
      <ReceivedLetterDetailStyle>
        <div>
          {letterData ? (<Card image={letterData.letters.imgPath || ""} />) : <div>Loading</div>}
          <div className='letter'>
          {letterData ? <div>{letterData.letters.comment}</div> : <div>Loading</div>}
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
