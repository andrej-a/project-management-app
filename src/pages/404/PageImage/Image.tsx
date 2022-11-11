/* STYLES */
import { ImageWrapper } from './Image.components';
import image from '../../../assets/img/no_result_page/page_is_not_exist.jpg';
export const Image = () => {
  return (
    <>
      <ImageWrapper>
        <img src={image} alt="page_is_not_exist" />
      </ImageWrapper>
    </>
  );
};
