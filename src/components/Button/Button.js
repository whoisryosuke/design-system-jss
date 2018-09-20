import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  myButton: {
    color: theme.text.color,
    margin: {
      // jss-expand gives more readable syntax
      top: 5, // jss-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: "1rem"
    },
    "& span": {
      // jss-nested applies this to a child span
      fontWeight: "bold" // jss-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: "italic"
  }
});

/**
 * Button description
 *
 */
const Button = ({ classes, children }) => (
  <button type="button" className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>
);

Button.propTypes = {
  /**
   * CSS Class names provided by JSS
   */
  classes: PropTypes.shape({
    myButton: PropTypes.string.isRequired,
    myLabel: PropTypes.string.isRequired
  }).isRequired,

  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default injectSheet(styles)(Button);
