import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ScrollableLink } from "react-update-url-on-scroll";

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
  "& ul": {
    listStyle: "none",
    display: "flex",
    "& li": {
      marginRight: "1em"
    }
  }
}));

/**
 * Displays the component
 */
const Menu = props => {
  return (
    <Container className="Menu">
      <ul>
        <li>
          <ScrollableLink href="/Hero">
            <a>Hero</a>
          </ScrollableLink>
        </li>
        <li>
          <ScrollableLink href="/Features">
            <a>Features</a>
          </ScrollableLink>
        </li>
        <li>
          <ScrollableLink href="/Pricing">
            <a>Pricing</a>
          </ScrollableLink>
        </li>
        <li>
          <ScrollableLink href="/Contact">
            <a>Contact</a>
          </ScrollableLink>
        </li>
      </ul>
    </Container>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { propTypes as MenuPropTypes, defaultProps as MenuDefaultProps };
