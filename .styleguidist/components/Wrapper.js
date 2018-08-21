import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "react-jss";
import theme from "../../src/theme/theme";

class Wrapper extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}

Wrapper.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Wrapper;
