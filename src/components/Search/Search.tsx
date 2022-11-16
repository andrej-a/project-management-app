import React, { useState } from 'react';

import { FormWrapper, InputSearch, Line } from './Search.styled';
import searchIcon from '../../assets/svg/search.svg';
import { HandySvg } from 'handy-svg';
import { useAppSelector } from '../../hooks/hooks';

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.header,
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
        placeholder={dictionary.SearchBoard} //нужно сделать условие, в зависимости от страницы где мы находимся меняется текст
        onChange={handleChange}
      />
      <HandySvg src={searchIcon} width="24" height="24" />
      <Line />
    </FormWrapper>
  );
};

export default Search;
