import React from 'react';
import TestRenderer from 'react-test-renderer';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import Button from './index';
import defaultTheme from '../../../styles/default.theme';
import { setDisplay } from '../../helpers';

fontawesome.library.add(solid);

describe('Button component', () => {
  test('renders without crashing', () => {
    const button = TestRenderer.create(<Button />);
    expect(button.toJSON().type).toBe('button');
  });

  test('renders without crashing with a theme', () => {
    const theme = {
      button: {
        background: '#BDD4DE',
        border: 'none',
        borderRadius: '0'
      }
    };
    const button = TestRenderer.create(<Button theme={theme} size="fullWidth" />);
    expect(button.toJSON().type).toBe('button');
  });

  test('renders without crashing with default theme', () => {
    const button = TestRenderer.create(<Button theme={defaultTheme} size="large" />);
    expect(button.toJSON().type).toBe('button');
  });

  test('renders children', () => {
    const button = TestRenderer.create(<Button>Click Me</Button>);
    const json = button.toJSON();
    expect(json.children).toEqual(['Click Me']);
  });

  test('renders children without crashing when using Fontawesome', () => {
    const button = TestRenderer.create(<Button>
        <FontAwesomeIcon icon='save'/>
        <span>Click Me</span>
      </Button>);
    const json = button.toJSON();
    expect(json.children[0].type).toBe('svg');
  });

  test('renders without crashing when size is set to fullWidth', () => {
    const display = setDisplay(defaultTheme.sizes.FULLWIDTH);
    expect(display).toEqual('block');
  });
});
