/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import Input from './index';

const inputStories = storiesOf('Atoms / Input', module);
inputStories.addDecorator(withKnobs);

inputStories.add(
  'Basic Input',
  withInfo(`
    ~~~js
    <Input />
    ~~~
`)(() =>
    <Input type='text' />)
);
