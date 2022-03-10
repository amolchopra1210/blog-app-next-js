import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="List of all programming tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.allPosts} />
    </>
  );
}
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts: allPosts,
    },
    revalidate: 60, //optional
  };
}
export default AllPostsPage;
