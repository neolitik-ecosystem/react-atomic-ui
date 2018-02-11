import React from 'react';
import TestRenderer from 'react-test-renderer';

import Label from './index';
import defaultTheme from '../../../styles/default.theme';

describe('Button component', () => {
  test('renders without crashing', () => {
    const label = TestRenderer.create(<Label />);
    expect(label.toJSON().type).toBe('label');
  });

  test('renders without crashing with a theme', () => {
    const theme = {
      label: {
        color: '#DFDFDF',
        fontWeight: '300',
        textTransform: 'lowercase'
      }
    };
    const label = TestRenderer.create(<Label theme={theme} size="small" />);
    expect(label.toJSON().type).toBe('label');
  });

  test('renders without crashing with default theme', () => {
    const label = TestRenderer.create(<Label theme={defaultTheme} size="large" />);
    expect(label.toJSON().type).toBe('label');
  });

  test('renders children', () => {
    const label = TestRenderer.create(<Label>This is a label</Label>);
    const json = label.toJSON();
    expect(json.children).toEqual(['This is a label']);
  });
});
