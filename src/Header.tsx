import { styled } from 'styled-components';
import { FiArrowRight } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
import logo from "../src/assets/SendYou.png"

function Header() {
    const handleBack = () => {
        window.history.back();
    }
    return (
        <HeaderStyle>
            <div className="back" onClick={handleBack}>
                <FiArrowRight className="icon"/>
            </div>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="SendYou" />
                </Link>
            </h1>
            <div className="name">
                <FiAlignJustify className="icon"/>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
  width : 100%;
  margin : 0 0 20px 0;
  max-width : ${({theme})=> theme.layout.width.default};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;

  .logo {
    img {
      width: 250px;
    }
  }

  .icon {
    font-size: 80px; 
    color: white; 
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
