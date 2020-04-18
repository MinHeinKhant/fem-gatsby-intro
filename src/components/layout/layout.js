import React from "react";
import { Global, css } from "@emotion/core";
import Header from "./navigation/header";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../query/useSiteMetadata";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            font-size: 62.5%;
          }

          * + * {
            margin-top: 1.6rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            line-height: 1.5;
          }

          body {
            font-size: 1.8rem;
          }

          /* remove margin for main div that Gatsby mounts into */
          body > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.8rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.4rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      <main
        css={css`
          margin: 3.2rem auto 6.4rem;
          max-width: 90vw;
          width: 55rem;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
