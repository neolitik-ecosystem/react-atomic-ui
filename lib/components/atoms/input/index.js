import PropTypes from 'prop-types';
import styled from 'react-emotion';
import inputSizes from './sizes';
import { setDisplay, setWidth } from '../../helpers';

/** Base Input component */
const Input = styled('input')(
  {
    margin: '0',
    transition: 'all 300ms ease',
    ':focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none'
    }
  },
  props => ({
    color: props.theme.input.color,
    border: props.theme.input.border,
    borderRadius: props.theme.input.borderRadius,
    background: props.theme.input.background,
    display: setDisplay(props.size),
    padding: inputSizes[props.size].padding,
    width: setWidth(props.size),
    fontSize: inputSizes[props.size].fontSize,
    lineHeight: inputSizes[props.size].lineHeight
  })
);

Input.defaultProps = {
  theme: {
    input: {
      color: '#000000',
      background: '#BDD4DE',
      border: 'none',
      borderRadius: '0'
    }
  },
  size: 'medium'
};

Input.propTypes = {
  /** Shape to override default settings */
  theme: PropTypes.shape({
    input: PropTypes.shape({
      color: PropTypes.string,
      background: PropTypes.string,
      border: PropTypes.string,
      borderRadius: PropTypes.string
    })
  }),
  /** String to define size of the Button */
  size: PropTypes.string
};

export default Input;
