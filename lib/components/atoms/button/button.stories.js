/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, object } from '@storybook/addon-knobs/react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';


import Button from './index';
import defaultTheme from '../../../styles/default.theme';

fontawesome.library.add(solid);

const buttonStories = storiesOf('Atoms / Button', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add(
  'Basic button',
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

buttonStories.add(
  'With Fontawsome',
  withInfo(`
  You have to install Fontawesome yourself and then within App.js or any file where you appliction is starting:
  ~~~js
    import fontawesome from '@fortawesome/fontawesome';
    import FontAwesomeIcon from '@fortawesome/react-fontawesome';
    import solid from '@fortawesome/fontawesome-free-solid';

    fontawesome.library.add(solid);
  ~~~

  You can found usefull information [here](https://github.com/FortAwesome/react-fontawesome)
  And then you can do :

  ~~~js
    <Button>
      <FontAwesomeIcon icon="save" />
      <span>Save</span>
    </Button>
  ~~~
`)(() => (
    <Button>
      <FontAwesomeIcon icon={ select(
  'Icon name',
  [
    'save',
    'calendar-alt',
    'paper-plane',
    'play-circle'
  ],
  'save'
)} />
      <span>  Save</span>
    </Button>
  ))
);
