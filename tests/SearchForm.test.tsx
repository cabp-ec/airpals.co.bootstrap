import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { SearchForm } from '../src/components/molecules/search.form/search.form';

test('Component is rendered', () => {
  const component = renderer.create(
    <SearchForm/>,
  );

  expect(component).toBeTruthy();
});
