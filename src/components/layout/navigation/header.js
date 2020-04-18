import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const NavLink = styled(Link)`
  color: #222;
  font-size: 1.6rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.8rem 0 0;
  padding: 0.4rem;
  text-decoration: none;

  /* for active link */
  &.currentPage {
    border-bottom: 1px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({}) => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* the box will have same width as 55rem */
      padding: 0.8rem calc((100vw - 55rem - 0.4rem) / 2);
      /* width: 55rem;
      margin: 3.2rem auto 6.4rem;
      max-width: 90vw; */
    `}
  >
    {/* site name */}
    <NavLink to="/" fontWeight="bold">
      Gatsby Intro
    </NavLink>
    {/* navigation */}
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="currentPage">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="currentPage">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
