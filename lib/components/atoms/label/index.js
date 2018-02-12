import PropTypes from 'prop-types';
import styled from 'react-emotion';
import labelSizes from './sizes';

/** Base Label component */
const Label = styled('label')(
  {
    display: 'inline-block',
    margin: '8px 0',
    transition: 'all 300ms ease',
    padding: '0 8px'
  },
  props => ({
    color: props.theme.label.color,
    fontWeight: props.theme.label.fontWeight,
    textTransform: props.theme.label.textTransform,
    lineHeight: labelSizes[props.size].lineHeight,
    fontSize: labelSizes[props.size].fontSize
  })
);

Label.defaultProps = {
  children: 'This is a Label',
  theme: {
    label: {
      color: '#CECECE',
      fontWeight: '300',
      textTransform: 'uppercase'
    }
  },
  size: 'medium'
};

Label.propTypes = {
  /** React node to be rendered within Button */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    button: PropTypes.shape({
      color: PropTypes.string,
      fontWeight: PropTypes.string,
      textTransform: PropTypes.string
    })
  }),
  /** String to define size of the Button */
  size: PropTypes.string
};

export default Label;
