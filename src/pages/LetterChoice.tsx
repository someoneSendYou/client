import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { christmasImages } from '../components/image/ChristmasData';
import { chuseokImages } from '../components/image/ChuSeokData';
import { newYearImages } from '../components/image/NewYearData.';

type Image = { src: string; alt: string };
type ImageData = { [key: string]: Image[] };

function LetterChoice() {
    const location = useLocation();
    const { category }: { category?: string } = location.state || {}; 

    const imageData: ImageData = {
        Christmas: christmasImages,
        ChuSeok: chuseokImages,
        NewYear: newYearImages,
    };

    // category와 imageData[category] 값을 출력하여 확인
    const sanitizedCategory = category?.trim();
    const selectedImages = sanitizedCategory && imageData[sanitizedCategory] ? imageData[sanitizedCategory] : [];

    return (
        <LetterChoiceStyle>
            <h3>선택된 카테고리: {category}</h3>
            <h3>카드 선택</h3>
            <div className="category">
                {selectedImages.map((image, index) => (
                    <div className="photo" key={index}>
                        <Link to="/choice">
                            <img src={image.src} alt={image.alt} />
                        </Link>
                    </div>
                ))}
            </div>
        </LetterChoiceStyle>
    );
}

const LetterChoiceStyle = styled.div`

    h3{
        margin: auto;
        padding-left: 36px;
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

export default LetterChoice;
