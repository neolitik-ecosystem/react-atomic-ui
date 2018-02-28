/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import ListItem from './index';
import { H1, H2 } from '../h';
import defaultTheme from '../../../styles/default.theme';

fontawesome.library.add(solid);

const listItemStories = storiesOf('Atoms / ListItem', module);
listItemStories.addDecorator(withKnobs);
listItemStories.add(
  'Simple ListItem',
  withInfo(`
    ~~~js
    <ListItem />
    ~~~
`)(() => <ListItem />)
);

listItemStories.add(
  'ListItem whith children',
  withInfo(`
    ~~~js
    <ListItem>
        <H1>Project 1</H1>
        <H2>Baseline of the project</H2>
    </ListItem>
    ~~~
  `)(() => <ListItem>
  <H1>Project 1</H1>
  <H2>Baseline of the project</H2>
</ListItem>)
);

listItemStories.add(
  'Playground',
  withInfo(`
    ~~~js
    <ListItem size={ SIZE }>
        <H1>Project 1</H1>
        <H2>Baseline of the project</H2>
    </ListItem>
    ~~~
  `)(() => <ListItem size={select(
    'Size',
    [
      defaultTheme.sizes.SMALL,
      defaultTheme.sizes.MEDIUM,
      defaultTheme.sizes.LARGE
    ],
    defaultTheme.sizes.MEDIUM
  )}>
  <H1>Project 1</H1>
  <H2>Baseline of the project</H2>
</ListItem>)
);

const theme = {
  listItem: {
    color: '#2B3A55',
    background: 'none',
    backgroundHover: '#FFFFFF',
    backgroundSelected: '#FFFFFF',
    border: 'none',
    borderRadius: '5px'
  }
};
listItemStories.add(
  'With icon',
  withInfo(`
    ~~~js
    <nav style={ { width: '100px' } }>
    <ul>
      <ListItem size='large' center  selected={ true } >
        <FontAwesomeIcon icon='save' />
      </ListItem>
      <ListItem size='large' center>
        <FontAwesomeIcon icon='calendar-alt' />
      </ListItem>
      <ListItem size='large' center>
        <FontAwesomeIcon icon='paper-plane' />
      </ListItem>
      <ListItem size='large' center>
        <FontAwesomeIcon icon='play-circle' />
      </ListItem>
    </ul>
  </nav>
    ~~~
  `)(() => <nav style={ { width: '72px', background: '#BDD4DE', padding: '5px' } }>
  <ul style={ { padding: '0' } }>
      <ListItem size='large' center theme={ theme } selected={ true } >
        <FontAwesomeIcon icon='save' />
      </ListItem>
      <ListItem size='large' center theme={ theme }>
        <FontAwesomeIcon icon='calendar-alt' />
      </ListItem>
      <ListItem size='large' center theme={ theme }>
        <FontAwesomeIcon icon='paper-plane' />
      </ListItem>
      <ListItem size='large' center theme={ theme }>
        <FontAwesomeIcon icon='play-circle' />
      </ListItem>
    </ul>
  </nav>)
);
