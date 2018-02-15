import React from 'react';
import TestRenderer from 'react-test-renderer';
import { H1, H2, H3, H4 } from './index';

xdescribe('H components', () => {
  test('renders without crashing with h1 tag', () => {
    const h1 = TestRenderer.create(<H1>Title</H1>);
    expect(h1.toJSON().type).toBe('h1');
  });

  test('renders without crashing with h2 tag', () => {
    const h2 = TestRenderer.create(<H2>Subtitle</H2>);
    expect(h2.toJSON().type).toBe('h2');
  });

  test('renders without crashing with h3 tag', () => {
    const h3 = TestRenderer.create(<H3>Baseline</H3>);
    expect(h3.toJSON().type).toBe('h3');
  });

  test('renders without crashing with h4 tag', () => {
    const h4 = TestRenderer.create(<H4>Highlight</H4>);
    expect(h4.toJSON().type).toBe('h4');
  });
});
