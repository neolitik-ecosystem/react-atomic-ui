import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGroup extends Component {
  cloneChild(child, newTheme) {
    return React.cloneElement(child, {
      theme: newTheme
    });
  }

  renderChild(child, theme, index) {
    const newTheme = { ...theme };
    if (index === 0) {
      newTheme.button = { ...theme.button, borderRadius: theme.buttonGroup.borderRadiusStart };
    } else if (index === this.props.children.length - 1) {
      newTheme.button = { ...theme.button, borderRadius: theme.buttonGroup.borderRadiusEnd };
    } else {
      newTheme.button = { ...theme.button, borderRadius: theme.buttonGroup.borderRadiusMiddle };
    }
    return this.cloneChild(child, newTheme);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      this.renderChild(child, this.props.theme, index));
  }

  render() {
    return (
        <div>
            { this.renderChildren() }
        </div>
    );
  }
}

ButtonGroup.defaultProps = {
  theme: {
    buttonGroup: {
      borderRadiusStart: '20px 0 0 20px',
      borderRadiusMiddle: '0',
      borderRadiusEnd: '0 20px 20px 0'
    },
    button: {
      background: '#DEDEDE',
      border: '1px solid #OOOOOO',
      borderRadius: '0'
    }
  }
};

ButtonGroup.propTypes = {
  /** React node to be rendered within ButtonGroup */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    buttonGroup: PropTypes.shape({
      borderRadiusStart: PropTypes.string,
      borderRadiusEnd: PropTypes.string,
      borderRadiusMiddle: PropTypes.string
    }),
    button: PropTypes.shape({
      background: PropTypes.string,
      border: PropTypes.string,
      borderRadius: PropTypes.string
    })
  })
};

export default ButtonGroup;
