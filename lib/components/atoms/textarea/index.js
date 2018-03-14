import PropTypes from 'prop-types';
import styled from 'react-emotion';

/** Base TextArea component */
const TextArea = styled('textarea')(
  {
    margin: '0',
    width: '100%',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    BoxSizing: 'border-box',
    transition: 'all 300ms ease',
    ':focus': {
      outlineColor: 'transparent',
      outlineStyle: 'none'
    }
  },
  props => ({
    color: props.theme.textarea.color,
    border: props.theme.textarea.border,
    borderRadius: props.theme.textarea.borderRadius,
    background: props.theme.textarea.background,
    padding: props.theme.textarea.padding,
    fontSize: props.theme.textarea.fontSize
  })
);

TextArea.defaultProps = {
  theme: {
    textarea: {
      color: '#000000',
      background: '#FFFFFF',
      border: '1px dashed grey',
      borderRadius: '0',
      padding: '20px',
      fontSize: '14px'
    }
  }
};

TextArea.propTypes = {
  /** Shape to override default settings */
  theme: PropTypes.shape({
    textarea: PropTypes.shape({
      color: PropTypes.string,
      background: PropTypes.string,
      border: PropTypes.string,
      borderRadius: PropTypes.string,
      padding: PropTypes.string,
      fontSize: PropTypes.string
    })
  })
};

export default TextArea;
