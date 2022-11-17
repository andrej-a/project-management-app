import React, { useState } from 'react';

import { useAppSelector } from '../../hooks/hooks';

import { FormWrapper, InputSearch } from './Search.styled';
import searchIcon from '../../assets/svg/search1.svg';
import { HandySvg } from 'handy-svg';

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.header,
    };
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  return (
    <FormWrapper>
      <InputSearch
        type="search"
        autoComplete="off"
        autoFocus
        value={search}
        placeholder={dictionary.SearchBoard}
        onChange={handleChange}
      />
      <HandySvg src={searchIcon} width="24" height="24" />
    </FormWrapper>
  );
};
