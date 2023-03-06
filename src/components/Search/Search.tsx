import React from 'react';
import { HandySvg } from 'handy-svg';

import { useAppSelector } from '../../hooks/hooks';

import {
  DeleteIconDiv,
  FormWrapper,
  InputSearch,
  InputSearchWrapper,
  SearchSelect,
} from './Search.styled';
import searchIcon from '../../assets/svg/search.svg';
import deleteIcon from '../../assets/img/cross.svg';

type Props = {
  search: string;
  setSearch: (searchStr: string) => void;
  setOption: (searchStr: boolean) => void;
  isOptionIsBoard: boolean;
};

export const Search = ({ search, setSearch, setOption, isOptionIsBoard }: Props) => {
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
          placeholder={isOptionIsBoard ? dictionary.SearchBoard : dictionary.SearchTask}
          onChange={handleChange}
        />
        <HandySvg src={searchIcon} width="24" height="24" />
        <DeleteIconDiv onClick={() => setSearch('')} className={search && 'active'}>
          <HandySvg src={deleteIcon} width="20" height="20" />
        </DeleteIconDiv>
      </InputSearchWrapper>
      <SearchSelect onChange={handleChangeOption}>
        <option value="boards">{dictionary.Boards}</option>
        <option value="tasks">{dictionary.Tasks}</option>
      </SearchSelect>
    </FormWrapper>
  );
};
