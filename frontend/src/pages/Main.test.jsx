import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Main from './Main';

test('Main', () => {
  const { container } = render((
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('MainContent');
});
