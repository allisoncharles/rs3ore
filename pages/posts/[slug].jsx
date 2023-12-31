import styles from "../../styles/BlogId.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Blog from "../../components/Blog";
import { getPost } from "../../client/requests";

const BlogId = ({ post }) => {
  return (
    <div className={styles.blogId}>
      <Navbar />
      <Blog post={post} priv={false} />
      <Footer />
    </div>
  );
};

export default BlogId;

export async function getServerSideProps(ctx) {
  const id = ctx?.query.postId;
  const postRes = await getPost(id);
  return {
    props: {
      post: postRes?.data,
    },
  };
}
