import { useAppSelector } from '../../../hooks/hooks';
/* STYLES */
import { TextWrapper, TextContent } from './Text.styled';

export const Text = () => {
  const { mainText } = useAppSelector((state) => {
    return {
      mainText: state.language.lang.noResultPage.title,
    };
  });
  return (
    <>
      <TextWrapper>
        <TextContent>{mainText}</TextContent>
      </TextWrapper>
    </>
  );
};
