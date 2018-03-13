import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from '../../atoms/button';
import ButtonGroup from './index';
import defaultTheme from '../../../styles/default.theme';

describe('ButtonGroup component', () => {
  test('renders without crashing', () => {
    const buttonGroup = TestRenderer.create(<ButtonGroup>
        <Button />
        <Button />
        <Button />
    </ButtonGroup>);
    const instance = buttonGroup.root;
    expect(instance.findAllByType(Button).length).toBe(3);
  });

  test('renders without crashing', () => {
    const buttonGroup = TestRenderer.create(<ButtonGroup>
        <Button />
        <Button />
        <Button />
    </ButtonGroup>);
    const instance = buttonGroup.root;
    expect(instance.findAllByType(Button)[2].props.theme.button.borderRadius).toBe('0');
  });

  test('renders without crashing', () => {
    const buttonGroup = TestRenderer.create(<ButtonGroup theme={ defaultTheme }>
        <Button />
        <Button />
        <Button />
    </ButtonGroup>);
    const instance = buttonGroup.root;
    expect(instance.findAllByType(Button)[1].props.theme.button.borderRadius).toBe('0');
  });

  test('renders without crashing with a theme', () => {
    const theme = {
      button: {
        background: '#BDD4DE',
        border: 'none',
        borderRadius: '0'
      },
      buttonGroup: {
        borderRadiusStart: '40px 0 0 40px',
        borderRadiusMiddle: '0',
        borderRadiusEnd: '0 40px 40px 0'
      }
    };
    const buttonGroup = TestRenderer.create(<ButtonGroup theme={theme}>
        <Button />
        <Button />
    </ButtonGroup>);
    const instance = buttonGroup.root;
    expect(instance.findAllByType(Button).length).toBe(2);
    expect(instance.findAllByType(Button)[0].props.theme.button.borderRadius).toBe('40px 0 0 40px');
    expect(instance.findAllByType(Button)[1].props.theme.button.borderRadius).toBe('0 40px 40px 0');
  });

  test('renders without crashing with default theme', () => {
    const buttonGroup = TestRenderer.create(<ButtonGroup theme={defaultTheme}>
    <Button />
        <Button />
    </ButtonGroup>);
    const instance = buttonGroup.root;
    expect(instance.findAllByType(Button).length).toBe(2);
    expect(instance.findAllByType(Button)[0].props.theme.button.borderRadius).toBe('5px 0 0 5px');
    expect(instance.findAllByType(Button)[1].props.theme.button.borderRadius).toBe('0 5px 5px 0');
  });
});
