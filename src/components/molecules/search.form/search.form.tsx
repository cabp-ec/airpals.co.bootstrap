import React  from 'react';
import { SearchFormInterface } from './search.form.interface';
import { Icon } from '../../particles/icon';
import { SearchResult } from '../../atoms/search.result/search.result';

export const SearchForm: React.FC<SearchFormInterface> = (props: SearchFormInterface) => {
  return <>
    <form className="d-flex justify-content-center align-items-center border border-secondary-subtle rounded shadow-sm">
      <Icon icon="geo-alt-fill" className="px-3"/>
      <input type="text" className="form-control border-0 ps-0"/>
    </form>

    <SearchResult/>
  </>;
};
