import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';

import { useAppSelector } from '../../hooks/hooks';

import { FormWrapper, InputSearch, InputSearchWrapper, SearchSelect } from './Search.styled';
import searchIcon from '../../assets/svg/search.svg';

type Props = {
  search: string;
  setSearch: (searchStr: string) => void;
  setOption: (searchStr: boolean) => void;
};

export const Search = ({ search, setSearch, setOption }: Props) => {
  const { dictionary } = useAppSelector((state) => {
    return {
      dictionary: state.language.lang.header,
    };
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };
  const handleChangeOption = (e: React.FormEvent<HTMLSelectElement>) => {
    const option = (e.target as HTMLSelectElement).value;
    option === 'boards' ? setOption(true) : setOption(false);
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
      <SearchSelect onChange={handleChangeOption}>
        <option value="boards">boards</option>
        <option value="tasks">tasks</option>
      </SearchSelect>
    </FormWrapper>
  );
};
