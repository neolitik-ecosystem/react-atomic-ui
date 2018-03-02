import React from 'react';
import TestRenderer from 'react-test-renderer';

import Text from './index';
import defaultTheme from '../../../styles/default.theme';

describe('Text component', () => {
  test('renders without crashing', () => {
    const text = TestRenderer.create(<Text />);
    expect(text.toJSON().type).toBe('span');
  });

  test('renders without crashing with a theme', () => {
    const theme = {
      text: {
        color: '#000000',
        background: '#BDD4DE',
        border: 'none',
        borderRadius: '0'
      }
    };
    const text = TestRenderer.create(<Text theme={theme} size="small" />);
    expect(text.toJSON().type).toBe('span');
  });

  test('renders without crashing with default theme', () => {
    const text = TestRenderer.create(<Text theme={defaultTheme} size="large" />);
    expect(text.toJSON().type).toBe('span');
  });
});
