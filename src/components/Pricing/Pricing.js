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
  backgroundColor: "lightcoral"
}));

/**
 * Displays the component
 */
const Pricing = props => {
  return (
    <ScrollableSection name="Pricing">
      <Container className="Pricing">Pricing</Container>
    </ScrollableSection>
  );
};

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
export { propTypes as PricingPropTypes, defaultProps as PricingDefaultProps };
