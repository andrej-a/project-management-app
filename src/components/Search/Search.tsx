import React, { useState } from 'react';

import { FormWrapper, InputSearch } from './Search.styled';
import searchIcon from '../../assets/svg/search.svg';
import { HandySvg } from 'handy-svg';

export const Search = () => {
  const [search, setSearch] = useState<string>('');

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
        placeholder="Search Projects..." //нужно сделать условие, в зависимости от страницы где мы находимся меняется текст
        onChange={handleChange}
      />
      <HandySvg src={searchIcon} width="24" height="24" />
    </FormWrapper>
  );
};

export default Search;
