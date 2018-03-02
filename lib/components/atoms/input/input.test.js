import React from 'react';
import TestRenderer from 'react-test-renderer';

import Input from './index';
import defaultTheme from '../../../styles/default.theme';

describe('Input component', () => {
  test('renders without crashing', () => {
    const input = TestRenderer.create(<Input />);
    expect(input.toJSON().type).toBe('input');
  });

  test('renders without crashing with a theme', () => {
    const theme = {
      input: {
        color: '#BDD4DE',
        background: '#000000',
        border: 'none',
        borderRadius: '0'
      }
    };
    const input = TestRenderer.create(<Input theme={theme} size="small" />);
    expect(input.toJSON().type).toBe('input');
  });

  test('renders without crashing with default theme', () => {
    const input = TestRenderer.create(<Input theme={defaultTheme} size="large" />);
    expect(input.toJSON().type).toBe('input');
  });
});
