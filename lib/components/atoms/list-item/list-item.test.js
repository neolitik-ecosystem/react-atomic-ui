import React from 'react';
import TestRenderer from 'react-test-renderer';
import ListItem from './index';
import defaultTheme from '../../../styles/default.theme';

describe('ListItem component', () => {
  test('renders without crashing', () => {
    const listItem = TestRenderer.create(<ListItem />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders without crashing with default theme', () => {
    const listItem = TestRenderer.create(<ListItem theme={ defaultTheme } />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders without crashing and center content', () => {
    const listItem = TestRenderer.create(<ListItem center />);
    expect(listItem.toJSON().type).toBe('li');
  });
});
