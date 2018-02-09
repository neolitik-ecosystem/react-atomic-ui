/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, object } from '@storybook/addon-knobs/react';

import Button from './index';
import defaultTheme from '../../../styles/default.theme';

const buttonStories = storiesOf('Atoms / Button', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add(
  'Simple button',
  withInfo(`
    ~~~js
    <Button>Click Here</Button>
    ~~~
`)(() => <Button />)
);

buttonStories.add(
  'Playground',
  withInfo(`
    You'll find in the right panel a __KNOBS__ tab that will allow to play with props and change theme
    
    ~~~js
      <Button
        onClick={ () => {} }
        size={ defaultTheme.sizes.MEDIUM }
        theme={ { 
          button: {
            background: defaultTheme.colors.BACKGROUND,
            border: '1px solid #CCCCCC'
            borderRadius: '5px'
          }
        }
      >
        Play with me !
      </Button>
    ~~~
`)(() => (
    <Button
      onClick={action('clicked')}
      size={select(
        'Size',
        [
          defaultTheme.sizes.SMALL,
          defaultTheme.sizes.MEDIUM,
          defaultTheme.sizes.LARGE,
          defaultTheme.sizes.WIDE,
          defaultTheme.sizes.EXTRAWIDE,
          defaultTheme.sizes.FULLWIDTH
        ],
        defaultTheme.sizes.MEDIUM
      )}
      theme={object('Theme', { button: defaultTheme.button })}
    >
      {text('Children', 'Play with me !')}
    </Button>
  ))
);

buttonStories.add(
  'Multiple buttons',
  withInfo(`
  ~~~js
    <nav>
      <Button />
      <Button />
      <Button />
      <Button />
    </nav>
  ~~~
`)(() => (
    <nav>
      <Button />
      <Button />
      <Button />
      <Button />
    </nav>
  ))
);
