import React  from 'react';
import { Icon } from '../../particles/icon';
import { SearchResultInterface } from './search.result.interface';

export const SearchResult: React.FC<SearchResultInterface> = (props: SearchResultInterface) => {
  return <div
    data-bs-toggle="modal"
    data-bs-target="#appModal"
    className="d-flex justify-content-center align-items-center border border-secondary-subtle rounded shadow-sm cursor-pointer"
  >
    <Icon icon="geo-alt" className="px-3"/>
    <div className="d-flex flex-column align-items-start py-3 w-100">
      <p className="fw-bold m-0">875 Bordeaux Way</p>
      <p className="m-0">Napa, CA, USA</p>
    </div>
  </div>;
};
