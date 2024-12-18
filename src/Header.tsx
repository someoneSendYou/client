import { styled } from 'styled-components';
import { FiArrowRight } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
import logo from "../src/assets/logo1.png"

function Header() {
    const handleBack = () => {
        window.history.back();
    }
    return (
        <HeaderStyle>
            <div className="back" onClick={handleBack}>
                <FiArrowRight className="icon"/>
            </div>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="SendYou" />
                </Link>
            </div>
            <div className="name">
                <FiAlignJustify className="icon"/>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
  width : 100%;
  max-width : 430px;
  margin : 0 0 20px 0;
  max-width : 430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eb5050;

  .logo {
    img {
      width: 76px;
    }
  }

  .icon {
    font-size: 40px; 
    color: white; 
    transform: scaleX(-1); 
  }

  .back {
    padding-left: 12px; 
    cursor : pointer;
  }

  .name {
    padding-right: 12px; 
  }
`;

export default Header;
