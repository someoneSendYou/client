import styled from 'styled-components'
import Card from '../components/card/Card';
import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { sendLetter } from '../api/letter-api';

// interface WriteLetterProps {
//   img: number;
// }

const WriteLetter = () => {

  const [comment, setcomment] = useState<string>('');
  const location = useLocation();
  const { image }: { image: { src: string; alt: string } } = location.state || {};
  const navigate = useNavigate();

  const onChangecomment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcomment(e.target.value);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const letterContent = {
      templete_id : 1,
      imgPath: image.src,
      title : "임시",
      comment, 
    }

    try {
      const response = await sendLetter(letterContent);
      console.log('서버 응답:', response);

      navigate('/letters/share', {
          state: {image, response}
      });

    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
      alert('데이터 전송에 실패했습니다.');
    }
  };  

  return (
    <WriteLetterStyle>
      <h3>편지 작성</h3>
        <Card image={image} />
      <form className='letter' onSubmit={handleSubmit}>
        <fieldset>
          <textarea
            rows={16}
            cols={35}
            placeholder='여기에 편지를 써주세요'
            value={comment} 
            onChange={onChangecomment}
          >
          </textarea>
          <div className='send-button'>
            <button type='submit'>SEND</button>
          </div>
        </fieldset>
      </form>
    </WriteLetterStyle>
  )
}

const WriteLetterStyle = styled.div`
  
  h3{        
    margin: auto;
    padding-left: 40px;
  }
  
  .letter {
    display: flex;
    justify-content: center;
    fieldset {
      border: none;

      textarea {
        padding: 20px;
        border-radius: 8px;
      }
    }
  }
  
  .send-button {
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

export default WriteLetter