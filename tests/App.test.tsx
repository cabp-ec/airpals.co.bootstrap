import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import App from '../src/App';

test('App is rendered', () => {
  const component = renderer.create(
    <App/>,
  );

  expect(component).toBeTruthy();
});
