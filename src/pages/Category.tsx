import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import photo1 from '../assets/CategoryPhoto/photo1.png'
import photo2 from '../assets/CategoryPhoto/photo2.png'
import photo3 from '../assets/CategoryPhoto/photo3.png'


function Category() {
    return (
        <CategoryStyle>
                <h1>카테고리 선택</h1>
            <div className="category">
                <div className="photo">
                    <Link to="/choice">
                        <img src={photo1} alt="photo1" />
                    </Link>
                </div>
                <div className="photo">
                    <Link to="/choice">
                        <img src={photo2} alt="photo2" />
                    </Link>
                </div>
                <div className="photo">
                    <Link to="/choice">
                        <img src={photo3} alt="photo3" />
                    </Link>
                </div>
                <a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">Designed by Freepik</a>
                </div>
        </CategoryStyle>
    )
}

const CategoryStyle = styled.div`

    h1{
        margin: auto;
        padding-left: 60px;
    }

    .category{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding : 12px;

        .photo{
            display: flex;
            justify-content: center;
            align-items: center;
            width : 1080px;
            height: auto;
            padding: 0 0 24px 0;

            img{
                width: 100%;
                height : auto;
                border : none;
                border-radius: 8px;
            }
        }
    }
`;

export default Category;
