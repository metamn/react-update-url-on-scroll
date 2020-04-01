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
  backgroundColor: "lightgray"
}));

/**
 * Displays the component
 */
const Hero = props => {
  return (
    <ScrollableSection name="Hero">
      <Container className="Hero">Hero</Container>
    </ScrollableSection>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
export { propTypes as HeroPropTypes, defaultProps as HeroDefaultProps };
