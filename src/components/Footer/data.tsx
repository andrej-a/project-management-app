import { HandySvg } from 'handy-svg';

import gitLogo from '../../assets/svg/github.svg';
import { SvgSizes } from '../../constants/applicationConstants';
import { MemberItem, MembersInfo } from './Footer.styled';

interface IContact {
  key: number;
  name: string;
  link: string;
}

const data: IContact[] = [
  {
    key: 1,
    name: 'Andrej Amelyanovitsch',
    link: 'https://github.com/andrej-a',
  },
  {
    key: 2,
    name: 'Anastasia Polivoda',
    link: 'https://github.com/polivodichka',
  },
  {
    key: 3,
    name: 'Lizaveta Petrova',
    link: 'https://github.com/Lizaveta01',
  },
];

const Item = ({ name, link }: IContact) => {
  return (
    <MemberItem>
      <a href={link} className="gitLogo">
        <HandySvg src={gitLogo} width={SvgSizes.MEDIUM} height={SvgSizes.MEDIUM} />
        <p>{name}</p>
      </a>
    </MemberItem>
  );
};

export const Contacts = () => {
  const elements = data.map(({ key, ...itemProps }) => {
    return <Item key={key} {...itemProps} />;
  });
  return <MembersInfo>{elements}</MembersInfo>;
};
