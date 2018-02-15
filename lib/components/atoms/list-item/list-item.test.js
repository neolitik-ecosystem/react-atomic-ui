import React from 'react';
import TestRenderer from 'react-test-renderer';
import ListItem from './index';

describe('ListItem component', () => {
  test('renders without crashing', () => {
    const listItem = TestRenderer.create(<ListItem />);
    expect(listItem.toJSON().type).toBe('li');
  });
});
