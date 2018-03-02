import colorTypes from './color.types.js';
import sizeTypes from './size.types.js';

const defaultTheme = {
  colors: colorTypes,
  sizes: sizeTypes,
  button: {
    background: colorTypes.BACKGROUND,
    border: '1px solid #CCCCCC',
    borderRadius: '5px'
  },
  buttonGroup: {
    borderRadiusStart: '5px 0 0 5px',
    borderRadiusEnd: '0 5px 5px 0',
    borderRadiusMiddle: '0'
  },
  label: {
    color: colorTypes.LABEL,
    fontWeight: '300',
    textTransform: 'none'
  },
  listItem: {
    color: '#2B3A42',
    background: colorTypes.BACKGROUND,
    backgroundHover: '#BDD4DE',
    backgroundSelected: '#BDD4DE',
    border: '1px solid #CCCCCC',
    borderRadius: '0'
  },
  h1: {
    margin: '0',
    color: '#2B3A42',
    textTransform: 'none',
    fontSize: '28px'
  },
  h2: {
    margin: '0',
    color: '#2B3A42',
    textTransform: 'none',
    fontSize: '20px'
  },
  h3: {
    margin: '0',
    color: '#2B3A42',
    textTransform: 'none',
    fontSize: '16px'
  },
  h4: {
    margin: '0',
    color: '#2B3A42',
    textTransform: 'none',
    fontSize: '14px'
  },
  input: {
    color: '#2B3A42',
    background: '#BDD4DE',
    border: 'none',
    borderRadius: '0'
  },
  text: {
    color: '#2B3A42',
    background: '#BDD4DE',
    border: 'none',
    borderRadius: '0'
  }
};

export default defaultTheme;
