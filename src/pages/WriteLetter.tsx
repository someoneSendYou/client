import styled from 'styled-components'
import Card from '../components/card/Card';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// interface WriteLetterProps {
//   img: number;
// }

const WriteLetter = () => {

  const [content, setContent] = useState<string>('');

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/share-letter');
  }

  return (
    <WriteLetterStyle>
      <h1>WriteLetter</h1>
        <Card img={3} />
      <form className='letter' onSubmit={handleSubmit}>
        <fieldset>
          <textarea
            rows={16}
            cols={35}
            placeholder='여기에 편지를 써주세요'
            value={content} 
            onChange={onChangeContent}
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