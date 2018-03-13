/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { H1, H2, H3, H4 } from './index';

const listItemStories = storiesOf('Atoms / H1,H2,H3,H4', module);
listItemStories.addDecorator(withKnobs);
listItemStories.add(
  'Default H1, H2, H3, H4',
  withInfo(`
    ~~~js
    <H1>h1 title</H1>
    <H2>h2 subtitle</H2>
    <H3>h3 baseline</H3>
    <H4>h4 highlight</H4>
    ~~~
`)(() =>
    <div>
        <H1>h1 title</H1>
        <H2>h2 subtitle</H2>
        <H3>h3 baseline</H3>
        <H4>h4 highlight</H4>
    </div>)
);
