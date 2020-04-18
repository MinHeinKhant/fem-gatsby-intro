import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout/layout";
import ReadLink from "../components/styledComponents/readLink";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }, body: {}) {
      frontmatter {
        slug
        author
        title
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 1.2rem;
        `}
      >
        posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
