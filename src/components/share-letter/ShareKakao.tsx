import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareKakaoProps {
  url : string;
  imagePath: string;
}
const message: { [key: string]: string} = {
  '0': '편지를 읽고 귀여운 카드를 골라 답장을 해보세요',
  '1': '따듯한 편지 너무 감동이에요 🩷',
  '2': '편지 잘 읽었어요 고맙습니다 💛',
  '3': '우리 우정 뽀레버 아시죠? 💚'
}

const ShareKakao = ({ url } : ShareKakaoProps) => {
  const kakaoKey = import.meta.env.VITE_APP_JAVASCRIPT_KEY;
  
  const kakaoTemplate = sessionStorage.getItem('kakao-template') || '0';

  useEffect(() => {
    // Kakao SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoKey);
      console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
    }
  }, []);

  const shareCustomTemplate = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendCustom({
        templateId : 115277,
        templateArgs: {
          title: kakaoTemplate ? '띵동 편지카드가 도착했습니다 !' : '띵동 답장이 도착했습니다~!',
          imageUrl: url,
          message: kakaoTemplate ? message[kakaoTemplate] : message[0]
        }
      });
    } else {
      console.error("Kakao SDK is not loaded.");
    }
  };

  return (
    <ShareKakaoStyle>
      <button onClick={shareCustomTemplate}>카카오 공유하기</button>
    </ShareKakaoStyle>
  );
};

const ShareKakaoStyle = styled.div`

  button {
    background-color: #ffeb00;
    color: #000;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export default ShareKakao;
