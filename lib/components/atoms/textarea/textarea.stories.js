/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import TextArea from './index';

const inputStories = storiesOf('Atoms / TextArea', module);
inputStories.addDecorator(withKnobs);

inputStories.add(
  'Basic TextArea',
  withInfo(`
    ~~~js
    <TextArea />
    ~~~
`)(() =>
    <TextArea rows='20' />)
);
