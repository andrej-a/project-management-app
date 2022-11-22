import React, { useState } from 'react';

import { useAppSelector } from '../../hooks/hooks';

import { FormWrapper, InputSearch, InputSearchWrapper, SearchSelect } from './Search.styled';
import searchIcon from '../../assets/svg/search.svg';
import { HandySvg } from 'handy-svg';

type Props = {
  search: string;
  setSearch: (searchStr: string) => void;
};

export const Search = ({ search, setSearch }: Props) => {
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
      <InputSearchWrapper>
        <InputSearch
          type="search"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder={dictionary.SearchBoard}
          onChange={handleChange}
        />
        <HandySvg src={searchIcon} width="24" height="24" />
      </InputSearchWrapper>
      <SearchSelect>
        {/* onChange={(e) => setOption(e.target.value)} */}
        <option value="">Search item</option>
        <option value="boards">boards</option>
        <option value="tasks">tasks</option>
      </SearchSelect>
    </FormWrapper>
  );
};
