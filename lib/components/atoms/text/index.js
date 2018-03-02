import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { darken } from 'polished';
import textSizes from './sizes';

/** Base Text component */
const Text = styled('span')(
  {
    margin: '0',
    outline: 'none',
    transition: 'all 300ms ease'
  },
  props => ({
    color: props.theme.text.color,
    border: props.theme.text.border,
    borderRadius: props.theme.text.borderRadius,
    background: props.theme.text.background,
    padding: textSizes[props.size].padding,
    fontSize: textSizes[props.size].fontSize,
    lineHeight: textSizes[props.size].lineHeight
  })
);

Text.defaultProps = {
  children: 'This is a text',
  theme: {
    text: {
      color: '#000000',
      background: '#BDD4DE',
      border: 'none',
      borderRadius: '0'
    }
  },
  size: 'medium'
};

Text.propTypes = {
  /** React node to be rendered within Button */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    text: PropTypes.shape({
      color: PropTypes.string,
      background: PropTypes.string,
      border: PropTypes.string,
      borderRadius: PropTypes.string
    })
  }),
  /** String to define size of the Button */
  size: PropTypes.string
};

export default Text;
