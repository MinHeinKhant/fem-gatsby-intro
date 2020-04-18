import React from "react";
import Image from "gatsby-image";
import { css } from "@emotion/core";
import useInstagram from "../query/useInstagram";

const Insta = ({}) => {
  // reterive data
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram post from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1.6rem -0.8rem;
        `}
      >
        {instaPhotos.map((photo) => (
          <a
            href={`https://instagram.com/p/${photo.id}`}
            target="_blank"
            css={css`
              display: block;
              box-shadow: 0;
              margin: 0.8rem;
              width: 12rem;
              max-width: calc(33% - 1.6rem);
              transition: box-shadow linear 200ms;

              :focus,
              :hover {
                box-shadow: 0 2px 1.4rem #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/gatsbyjs`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
