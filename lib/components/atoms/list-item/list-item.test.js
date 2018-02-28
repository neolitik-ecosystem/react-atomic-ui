import React from 'react';
import TestRenderer from 'react-test-renderer';
import ListItem from './index';
import defaultTheme from '../../../styles/default.theme';

describe('ListItem component', () => {
  test('renders without crashing', () => {
    const listItem = TestRenderer.create(<ListItem />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders with default theme', () => {
    const listItem = TestRenderer.create(<ListItem theme={ defaultTheme } />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders with centered content', () => {
    const listItem = TestRenderer.create(<ListItem center />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders with center explicitly set to false', () => {
    const listItem = TestRenderer.create(<ListItem center={ false } />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders selected', () => {
    const listItem = TestRenderer.create(<ListItem selected />);
    expect(listItem.toJSON().type).toBe('li');
  });

  test('renders with selected explicitly set to false', () => {
    const listItem = TestRenderer.create(<ListItem selected={ false } />);
    expect(listItem.toJSON().type).toBe('li');
  });
});
