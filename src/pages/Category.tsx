import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { CategoryData } from "../components/image/CategoryData"; // CategoryData 파일 불러오기

function Category() {
    return (
        <CategoryStyle>
            <h3>카테고리 선택</h3>
            <div className="category">
                {CategoryData.map((item, index) => (
                    <div className="photo" key={index}>
                        <Link to="/choice" state={{ category: item.alt }}>
                            <img src={item.src} alt={item.alt} />
                        </Link>
                    </div>
                ))}
            </div>
        </CategoryStyle>
    );
}

const CategoryStyle = styled.div`
    h3{
        margin: auto;
        padding-left: 20px;
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
            width : 360px;
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
