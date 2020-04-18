import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import usePosts from "../query/usePosts";
import PostPreview from "../components/posts/postPreview";
import Hero from "../components/hero";
import Insta from "../components/insta";

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hello!!</p>
        <Link to="/about/">About me &rarr;</Link>

        <h2>Read my blog.</h2>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post}></PostPreview>
        ))}
        <Insta />
      </Layout>
    </>
  );
};
