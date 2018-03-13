/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';


import Button from '../../atoms/button';
import ButtonGroup from './index';
import defaultTheme from '../../../styles/default.theme';

fontawesome.library.add(solid);

const buttonStories = storiesOf('Molecules / ButtonGroup', module);
buttonStories.add(
  'Basic Group',
  withInfo(`
    ~~~js
        <ButtonGroup theme={ 
            colors: colorTypes,
            sizes: sizeTypes,
            button: {
                background: colorTypes.BACKGROUND,
                border: '1px solid #CCCCCC',
                borderRadius: '5px'
            },
            buttonGroup: {
                borderRadiusStart: '20px 0 0 20px',
                borderRadiusMiddle: '0',
                borderRadiusEnd: '0 20px 20px 0'
            }
            >
            <Button>
                <FontAwesomeIcon icon='align-right' />
            </Button>
            <Button>
                <FontAwesomeIcon icon='align-justify' />
            </Button>
            <Button>
                <FontAwesomeIcon icon='align-center' />
            </Button>
            <Button>
                <FontAwesomeIcon icon='align-left' />
            </Button>
        </ButtonGroup>
    ~~~
`)(() =>
    <ButtonGroup theme={ defaultTheme }>
        <Button>
            <FontAwesomeIcon icon='align-right' />
        </Button>
        <Button>
            <FontAwesomeIcon icon='align-justify' />
        </Button>
        <Button>
            <FontAwesomeIcon icon='align-center' />
        </Button>
        <Button>
            <FontAwesomeIcon icon='align-left' />
        </Button>
    </ButtonGroup>)
);

buttonStories.add(
  'Validate/Cancel Group',
  withInfo(`
      ~~~js
          <ButtonGroup theme={ 
              colors: colorTypes,
              sizes: sizeTypes,
              button: {
                  background: colorTypes.BACKGROUND,
                  border: '1px solid #CCCCCC',
                  borderRadius: '5px'
              },
              buttonGroup: {
                  borderRadiusStart: '20px 0 0 20px',
                  borderRadiusMiddle: '0',
                  borderRadiusEnd: '0 20px 20px 0'
              }
              >
          <Button theme={ { button: defaultTheme.buttonSuccess } } >
              <FontAwesomeIcon icon='save' />
          </Button>
          <Button theme={ { button: defaultTheme.buttonDanger } } >
              <FontAwesomeIcon icon='window-close' />
          </Button>
          </ButtonGroup>
      ~~~
  `)(() =>
      <ButtonGroup>
          <Button theme={ { button: defaultTheme.buttonSuccess } } >
              <FontAwesomeIcon icon='save' />
          </Button>
          <Button theme={ { button: defaultTheme.buttonDanger } } >
              <FontAwesomeIcon icon='window-close' />
          </Button>
      </ButtonGroup>)
);

