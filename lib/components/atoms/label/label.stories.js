/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, object } from '@storybook/addon-knobs/react';

import Label from './index';
import defaultTheme from '../../../styles/default.theme';

const labelStories = storiesOf('Atoms / Label', module);
labelStories.addDecorator(withKnobs);
labelStories.add(
  'Basic Label',
  withInfo(`
    ~~~js
    <Label>Click Here</Label>
    ~~~
`)(() => <Label />)
);

labelStories.add(
  'Playground',
  withInfo(`
      You'll find in the right panel a __KNOBS__ tab that will allow to play with props and change theme
      
      ~~~js
        <Label
          size={ defaultTheme.sizes.LARGE }
          theme={ { 
            label: {
                color: '#DEDEDE',
                fontWeight: '300',
                textTransform: 'lowercase'
              }
          }
        >
          This is a label
        </Label>
      ~~~
  `)(() => (
      <Label
        size={select(
          'Size',
          [
            defaultTheme.sizes.SMALL,
            defaultTheme.sizes.MEDIUM,
            defaultTheme.sizes.LARGE
          ],
          defaultTheme.sizes.LARGE
        )}
        theme={object('Theme', { label: defaultTheme.label })}
      >
        {text('Children', 'This is a label')}
      </Label>
  ))
);
