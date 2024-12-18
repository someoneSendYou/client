import styled from 'styled-components'

interface ShareURLProps {
  handleCopyClipBoard: (text: string) => void;
}

const ShareURL = ({ handleCopyClipBoard }: ShareURLProps) => {

  return (
    <ShareURLStyle>
      <button
        onClick={() => {
          handleCopyClipBoard('http://localhost:5173/received-letter')
        }}
      >URL 공유하기</button>
    </ShareURLStyle>
  )
}

const ShareURLStyle = styled.div`
    button {
        color: #000;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
    }
`;

export default ShareURL
