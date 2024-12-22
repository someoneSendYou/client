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
  const [selectedResponse, setSelectedResponse] = useState<string>('');

  const handleReply = () => {
    navigate('/');
  }

  const handleResponse = (response: string) => {
    sessionStorage.removeItem('kakao-template');
    sessionStorage.setItem('kakao-template', response);
    setSelectedResponse(response);
  };

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

  const formatComment = (comment: string) => {
    return comment.replace(/\n/g, "<br>");
  }

  return (
    <>
      <ReceivedLetterDetailStyle>
        <div className='container'>
          {letterData ? (<Card image={letterData.letters.imgPath || ""} />) : <div>Loading</div>}
          <div className='letter'>
            {letterData ? (
              <div dangerouslySetInnerHTML={{__html: formatComment(letterData.letters.comment)}}>
              </div>)
              : <div>Loading</div>}
          </div>
          <div>
            <div className='response-title'>하트를 클릭해서 마음을 전달해주세요</div>
            <div className="response-box">
            <button
              className={selectedResponse === '1' ? 'button-clicked' : 'button-unclicked'}
              onClick={() => handleResponse('1')}
            >
              ❤️
              <div>감동이에요</div>
            </button>
            <button
              className={selectedResponse === '2' ? 'button-clicked' : 'button-unclicked'}
              onClick={() => handleResponse('2')}
            >
              💛
              <div>너무 고마워요</div>
            </button>
            <button
              className={selectedResponse === '3' ? 'button-clicked' : 'button-unclicked'}
              onClick={() => handleResponse('3')}
            >
              💚
              <div>우정뽀레버</div>
            </button>
          </div>
          </div>
          <div className='reply-button'>
            <button disabled={!selectedResponse} onClick={handleReply}>
              답장하러 가기
            </button>
          </div>
        </div>
      </ReceivedLetterDetailStyle>
    </>
  )
}

const ReceivedLetterDetailStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .letter {
    width: 350px;
    height: 350px;
    background: #f0f0f0;
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
      justify-content: space-between;
      padding: 20px 0;
      gap : 40px;
      
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
    background: #e55858;
  }

  .button-unclicked {
    background: white;
  }

  .reply-button {
    display: flex;
    justify-content: flex-end;
    width : 100%;
    padding: 20px 0px;
    padding-right: 28px;

    button {
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
    }
  }
`;

export default ReceivedLetterDetail
