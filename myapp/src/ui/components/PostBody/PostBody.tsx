/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "../../../data/@types/BlogPostInterface";
import styles from "./PostBody.module.css";

export default function PostBody({ post }: { post: BlogPost }) {
  return (
    <div className={styles["post-container"]}>
      <h2 className={styles["post-title"]}>{post.title}</h2>
      <img
        className={styles["post-picture"]}
        src={post.picture}
        alt={post.title}
      />
      <div  className={styles["post-content"]}
  
        dangerouslySetInnerHTML={{__html: post.content}}/>

    </div>
  );
}
