import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darken } from 'polished';
import buttonSizes from './sizes';
import { setDisplay, setWidth } from '../../helpers';

/** Base Button component */
const Button = styled('button')(
  {
    cursor: 'pointer',
    margin: '8px 0',
    outline: 'none',
    transition: 'all 300ms ease'
  },
  props => ({
    border: props.theme.button.border,
    borderRadius: props.theme.button.borderRadius,
    background: props.theme.button.background,
    display: setDisplay(props.size),
    padding: buttonSizes[props.size].padding,
    width: setWidth(props.size),
    fontSize: buttonSizes[props.size].fontSize,
    lineHeight: buttonSizes[props.size].lineHeight,
    ':hover': {
      background: darken(0.2, props.theme.button.background)
    }
  })
);

Button.defaultProps = {
  children: 'This is a button',
  theme: {
    button: {
      background: '#BDD4DE',
      border: 'none',
      borderRadius: '0'
    }
  },
  size: 'medium'
};

Button.propTypes = {
  /** React node to be rendered within Button */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    button: PropTypes.shape({
      background: PropTypes.string,
      border: PropTypes.string,
      borderRadius: PropTypes.string
    })
  }),
  /** String to define size of the Button */
  size: PropTypes.string
};

export default Button;
