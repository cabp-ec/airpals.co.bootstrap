import React, { useContext, useEffect, useRef } from 'react';
import { SearchFormInterface } from './search.form.interface';
import { Icon } from '../../particles/icon';
import PlacesSearchContext from '../../../app/context/places.search.context';

/**
 * SearchForm Component
 *
 * @param props
 * @constructor
 */
export const SearchForm: React.FC<SearchFormInterface> = ({ onResultSelect }: SearchFormInterface) => {
  const placesSearch = useContext(PlacesSearchContext);
  const refInput = useRef(null);

  useEffect(() => refInput.current
    ? placesSearch.setup(refInput.current as HTMLInputElement, onResultSelect)
    : null, [placesSearch, onResultSelect]);

  return <>
    <Icon icon="geo-alt-fill" className="icon-search-input px-3"/>
    <form
      className="form-place-search bg-white rounded border border-secondary-subtle rounded shadow-sm"
    >
      <input
        ref={ refInput }
        type="search"
        id="search-input"
        placeholder="Start Searching..."
        className="form-control bg-transparent border-0 px-5"
      />
    </form>
  </>;
};
