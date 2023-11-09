import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { PageHeader } from '../src/components/atoms/page.header/page.header';

test('Component is rendered', () => {
  const component = renderer.create(
    <PageHeader title="Where are you located?" paragraphs={ [] }/>,
  );

  expect(component).toBeTruthy();
});
