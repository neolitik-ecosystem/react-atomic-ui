/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import Input from './index';
import Button from '../../atoms/button';

fontawesome.library.add(solid);

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

inputStories.add(
  'Set value with uncontrolled component',
  withInfo(`
      ~~~js
      <Input type='text' defaultValue='Hi there !' />
      ~~~
  `)(() =>
      <Input type='text' defaultValue='Hi there !' />)
);

inputStories.add(
  'Set value with controlled component',
  withInfo(`
        ~~~js
        <Input type='text' value='Hi there ! onChange={ (event) => {} }' />
        ~~~
    `)(() =>
        <Input type='text' value='Hi there !' onChange={ this.onChange } />)
);

inputStories.add(
  'Input with icon button',
  withInfo(`
        ~~~js
        <Input type='text' defaultValue='Hi there !' />
        <Button>
            <FontAwesomeIcon icon='save' />
        </Button>
        ~~~
    `)(() =>
    <div>
        <Input type='text' defaultValue='Hi there !' />
        <Button>
            <FontAwesomeIcon icon='save' />
        </Button>
    </div>)
);
