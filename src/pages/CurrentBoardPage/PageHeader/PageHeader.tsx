import BackBtn from './BackBtn/BackBtn';
import { PageHeaderStyled } from './PageHeader.components';

const PageHeader = ({ title }: { title: string }) => {
  return (
    <PageHeaderStyled>
      <h2>{title}</h2>
      <BackBtn />
    </PageHeaderStyled>
  );
};

export default PageHeader;
