import { useAppSelector } from '../../../hooks/hooks';
import { IMembers } from '../../../models/IMember';
import Member from './Member';

import ImageAndrej from '../../../assets/img/andrej.jpg';
import ImageLiza from '../../../assets/img/liza.jpg';
import ImageNastya from '../../../assets/img/nastya.jpg';

import { DivContainerMembers } from './Member.styled';

const TeamMembers = () => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.mainPage,
    };
  });
  const data: IMembers[] = [
    {
      key: 1,
      name: `${dictionary.Andrej}`,
      img: `${ImageAndrej}`,
      role: `${dictionary.teamLead}`,
      link: 'https://github.com/andrej-a',
    },
    {
      key: 2,
      name: `${dictionary.Nastya}`,
      img: `${ImageNastya}`,
      role: `${dictionary.developer}`,
      link: 'https://github.com/polivodichka',
    },
    {
      key: 3,
      name: `${dictionary.Lizaveta}`,
      img: `${ImageLiza}`,
      role: `${dictionary.developer}`,
      link: 'https://github.com/Lizaveta01',
    },
  ];

  const elements = data.map(({ key, ...itemProps }) => {
    return <Member key={key} {...itemProps} />;
  });

  return <DivContainerMembers>{elements}</DivContainerMembers>;
};
export default TeamMembers;
