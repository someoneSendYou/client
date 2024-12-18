import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

const ShareKakao = () => {

  const kakaoKey = import.meta.env.VITE_APP_JAVASCRIPT_KEY;

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
        templateId: 115277, 
        // templateArgs: {
        //   title: 
        //   description: 
        //   idx:
        // },
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
