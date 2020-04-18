import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import ReadLink from "../styledComponents/readLink";
import Image from "gatsby-image";

const PostPreview = ({ post: { title, author, excerpt, slug, image } }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 1.2rem;
        padding-bottom: 1.6rem;
        display: flex;

        &:first-of-type {
          margin-top: 1.6rem;
        }
      `}
    >
      <Link
        to={slug}
        css={css`
          margin: 1.6rem 1.6rem 0 0;
          width: 10rem;
        `}
      >
        <Image
          fluid={image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={title}
        />
      </Link>
      <div>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <p>{excerpt}</p>
        <ReadLink to={slug}>Read this post &rarr;</ReadLink>
      </div>
    </article>
  );
};

export default PostPreview;
