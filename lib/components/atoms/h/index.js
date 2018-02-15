import PropTypes from 'prop-types';
import styled from 'react-emotion';

/** TODO SHOULD be refactor by using a factory approach */

/** Base H1 component */
const H1 = styled('h1')(
  {
    padding: 0,
    display: 'block',
    transition: 'all 300ms ease'
  },
  props => ({
    margin: props.theme[props.styleType].margin,
    color: props.theme[props.styleType].color,
    textTransform: props.theme[props.styleType].textTransform,
    fontSize: props.theme[props.styleType].fontSize
  })
);

H1.defaultProps = {
  children: 'This is a H1',
  theme: {
    h1: {
      margin: '0',
      color: '#2B3A42',
      textTransform: 'none',
      fontSize: '28px'
    }
  },
  styleType: 'h1'
};

H1.propTypes = {
  /** React node to be rendered */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    h1: PropTypes.shape({
      margin: PropTypes.string,
      color: PropTypes.string,
      textTransform: PropTypes.string,
      fontSize: PropTypes.string
    })
  }),
  /** Define wich theme prop should be used */
  styleType: PropTypes.string
};

const H2 = H1.withComponent('h2');
H2.defaultProps = {
  children: 'This is a H2',
  theme: {
    h2: {
      margin: '0',
      color: '#2B3A42',
      textTransform: 'none',
      fontSize: '20px'
    }
  },
  styleType: 'h2'
};
H2.propTypes = {
  /** React node to be rendered */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    h2: PropTypes.shape({
      margin: PropTypes.string,
      color: PropTypes.string,
      textTransform: PropTypes.string,
      fontSize: PropTypes.string
    })
  }),
  /** Define wich theme prop should be used */
  styleType: PropTypes.string
};

const H3 = H1.withComponent('h3');
H3.defaultProps = {
  children: 'This is a H3',
  theme: {
    h3: {
      margin: '0',
      color: '#2B3A42',
      textTransform: 'none',
      fontSize: '16px'
    }
  },
  styleType: 'h3'
};
H3.propTypes = {
  /** React node to be rendered */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    h2: PropTypes.shape({
      margin: PropTypes.string,
      color: PropTypes.string,
      textTransform: PropTypes.string,
      fontSize: PropTypes.string
    })
  }),
  styleType: PropTypes.string
};

const H4 = H1.withComponent('h4');
H4.defaultProps = {
  children: 'This is a H4',
  theme: {
    h4: {
      margin: '0',
      color: '#2B3A42',
      textTransform: 'none',
      fontSize: '14px'
    }
  },
  styleType: 'h4'
};
H4.propTypes = {
  /** React node to be rendered */
  children: PropTypes.node.isRequired,
  /** Shape to override default settings */
  theme: PropTypes.shape({
    h2: PropTypes.shape({
      margin: PropTypes.string,
      color: PropTypes.string,
      textTransform: PropTypes.string,
      fontSize: PropTypes.string
    })
  }),
  styleType: PropTypes.string
};

export {
  H1,
  H2,
  H3,
  H4
};
