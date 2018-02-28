import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { transparentize } from 'polished';
import itemSizes from './sizes';

/** List item component */
const ListItem = styled('li')(
  {
    cursor: 'pointer',
    margin: '0',
    outline: 'none',
    display: 'block',
    transition: 'all 300ms ease'
  },
  props => ({
    color: props.theme.listItem.color,
    border: props.theme.listItem.border,
    borderRadius: props.theme.listItem.borderRadius,
    background: props.selected ? props.theme.listItem.backgroundSelected : props.theme.listItem.background,
    padding: itemSizes[props.size].padding,
    fontSize: itemSizes[props.size].fontSize,
    lineHeight: itemSizes[props.size].lineHeight,
    textAlign: props.center ? 'center' : 'left',
    ':hover': {
      background: transparentize(0.5, props.theme.listItem.backgroundHover)
    }
  })
);

ListItem.defaultProps = {
  children: 'This is a li',
  theme: {
    listItem: {
      color: '#2B3A42',
      background: '#BDD4DE',
      backgroundHover: '#BDD4DE',
      backgroundSelected: '#BDD4DE',
      border: 'none',
      borderRadius: '0'
    }
  },
  size: 'large',
  selected: false
};

ListItem.propTypes = {
  /** React node to be rendered within ListItem */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    listItem: PropTypes.shape({
      color: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      backgroundHover: PropTypes.string.isRequired,
      backgroundSelected: PropTypes.string,
      border: PropTypes.string.isRequired,
      borderRadius: PropTypes.string.isRequired
    })
  }),
  /** String to define size of the ListItem */
  size: PropTypes.string,
  /** Boolean to define if the ListItem is selected  */
  selected: PropTypes.bool
};

export default ListItem;
