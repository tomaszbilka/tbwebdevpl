import PostItem from "./post-item";
import { sortPostsByDate } from "../../utils/postSort";

import classes from "./posts-grid.module.css";

const PostsGrid = (props) => {
  const { posts } = props;

  const sortedPosts = sortPostsByDate(posts);

  return (
    <ul className={classes.grid}>
      {sortedPosts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
