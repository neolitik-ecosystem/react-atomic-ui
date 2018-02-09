import colorTypes from './color.types.js';
import sizeTypes from './size.types.js';

const defaultTheme = {
  colors: colorTypes,
  sizes: sizeTypes,
  button: {
    background: colorTypes.BACKGROUND,
    border: '1px solid #CCCCCC',
    borderRadius: '5px'
  }
};

export default defaultTheme;
