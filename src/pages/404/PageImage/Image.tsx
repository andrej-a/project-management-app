/* STYLES */
import { ImageWrapper } from './Image.styled';
import image from '../../../assets/img/no_result_page/page_is_not_exist.png';
export const Image = () => {
  return (
    <>
      <ImageWrapper>
        <img src={image} alt="page_is_not_exist" />
      </ImageWrapper>
    </>
  );
};
