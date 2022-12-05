import React from 'react';
import { IMembers } from '../../../models/IMember';
import { HandySvg } from 'handy-svg';

import gitLogo from '../../../assets/svg/github.svg';
import { SvgSizes } from '../../../constants/applicationConstants';

import { MemberWrapper, MemberImage, MemberTextBlock, BlockName, BlockRole } from './Member.styled';

const Member = ({ name, img, role, link }: IMembers) => {
  return (
    <MemberWrapper>
      <MemberImage>
        <img src={img} alt="member photo" />
      </MemberImage>
      <MemberTextBlock>
        <BlockRole>{role}</BlockRole>
        <BlockName>
          <a href={link}>
            <p>{name}</p>
            <HandySvg src={gitLogo} width={SvgSizes.SMALL} height={SvgSizes.SMALL} />
          </a>
        </BlockName>
      </MemberTextBlock>
    </MemberWrapper>
  );
};
export default Member;
