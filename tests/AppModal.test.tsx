import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { AppModal } from '../src/components/molecules/app.modal/app.modal';

test('Component is rendered', () => {
  const component = renderer.create(
    <AppModal title="Address updated" closeLabel="Understood" paragraphs={ [] }/>,
  );

  expect(component).toBeTruthy();
});
