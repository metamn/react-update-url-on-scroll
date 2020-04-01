import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ScrollableSection from "react-update-url-on-scroll";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const Container = styled("div")(props => ({
  minHeight: "100vh",
  borderBottom: "1px solid",
  backgroundColor: "lightyellow"
}));

/**
 * Displays the component
 */
const Contact = props => {
  return (
    <ScrollableSection name="Contact">
      <Container className="Contact">Contact</Container>
    </ScrollableSection>
  );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
export { propTypes as ContactPropTypes, defaultProps as ContactDefaultProps };
