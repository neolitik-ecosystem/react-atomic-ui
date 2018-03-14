import React from 'react';
import TestRenderer from 'react-test-renderer';

import TextArea from './index';
import defaultTheme from '../../../styles/default.theme';

describe('Text component', () => {
  test('renders without crashing', () => {
    const text = TestRenderer.create(<TextArea />);
    expect(text.toJSON().type).toBe('textarea');
  });

  test('renders without crashing with a theme', () => {
    const theme = {
      textarea: {
        color: '#FFFFFF',
        background: '#000000',
        border: '1px dotted grey',
        borderRadius: '10',
        padding: '0',
        fontSize: '14px'
      }
    };
    const text = TestRenderer.create(<TextArea theme={theme} />);
    expect(text.toJSON().type).toBe('textarea');
  });

  test('renders without crashing with default theme', () => {
    const text = TestRenderer.create(<TextArea theme={defaultTheme} />);
    expect(text.toJSON().type).toBe('textarea');
  });
});