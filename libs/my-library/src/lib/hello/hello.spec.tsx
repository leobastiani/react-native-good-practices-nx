import React from 'react';
import { render } from '@testing-library/react-native';

import Hello from './hello';

describe('Hello', () => {
  it('should render successfully', () => {
    const { container } = render(<Hello />);
    expect(container).toBeTruthy();
  });
});
