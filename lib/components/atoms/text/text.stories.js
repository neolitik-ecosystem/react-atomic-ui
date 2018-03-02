/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import defaultTheme from '../../../styles/default.theme';
import Text from './index';

const textStories = storiesOf('Atoms / Text', module);
textStories.addDecorator(withKnobs);

textStories.add(
  'Basic Text',
  withInfo(`
    ~~~js
    <Text />
    ~~~
`)(() =>
    <Text />)
);

textStories.add(
  'Text with children',
  withInfo(`
      ~~~js
      <Text>This is a text</Text>
      ~~~
  `)(() =>
      <Text>This is a text with default format</Text>)
);

textStories.add(
  'Choose your size',
  withInfo(`
        You'll find in the right panel a __KNOBS__ tab that will allow to play with props and change theme
        ~~~js
        <Text size={ defaultTheme.sizes.MEDIUM }>This is a text with default format as children</Text>
        ~~~
    `)(() =>
        <Text size={select(
            'Size',
            [
              defaultTheme.sizes.SMALL,
              defaultTheme.sizes.MEDIUM,
              defaultTheme.sizes.LARGE
            ],
            defaultTheme.sizes.MEDIUM
          )}>This is a text with default format</Text>)
);

